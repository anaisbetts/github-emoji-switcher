// NOTE:  For some reason the package name being pushed to 'compress'
//        is picked up BEFORE this task is run, so the build version
//        will always be behind by 1.

module.exports = function (grunt) {
	grunt.registerMultiTask('updatePackage', 'Update package.json with manifest.json version number.', function () {
		var path = require('path');
		var chalk = require('chalk');
		grunt.log.ok();

		var done = this.async();

		var options = this.options();

		if (!grunt.file.exists(options.manifest)) {
			grunt.log.error('No manifest file exists at ' + chalk.cyan(path.resolve(options.manifest)));
		}
		if (!grunt.file.exists(options.package)) {
			grunt.log.error('No package file exists at ' + chalk.cyan(path.resolve(options.package)));
		}

		var package = grunt.file.readJSON(options.package),
			manifest = grunt.file.readJSON(options.manifest);

		var	regex = /(\d+\.\d+\.)(\d+)/,
			version = regex.exec(manifest.version),
			newBuild = parseInt(version[2]) + 1,
			newVersion = manifest.version.replace(regex, '$1'+newBuild);

		grunt.log.ok("Updating manifest version to " + chalk.cyan(newVersion));

		manifest.version = newVersion;
		package.version = manifest.version;

		grunt.file.write(options.package, JSON.stringify(package, undefined, 4));
		grunt.file.write(options.manifest, JSON.stringify(manifest, undefined, 4));

		grunt.log.ok("Updated package to version to " + chalk.cyan(package.version));
		done();
	});

	grunt.registerMultiTask('setMinContentScripts', 'Set all content_script scripts to ".min.js".', function() {
		var path = require('path');
		var chalk = require('chalk');
		grunt.log.ok();

		var done = this.async();

		var options = this.options({
			manifest: 'app/manifest.json'
		});

		if (!grunt.file.exists(options.manifest)) {
			grunt.log.error('No manifest file exists at ' + chalk.cyan(path.resolve(options.manifest)));
		}

		var manifest = grunt.file.readJSON(options.manifest);

		manifest.content_scripts.forEach(function(script, i) {
			if (script.js){
				script.js.forEach(function(js, j) {
					if (!/.min.js/.test(js)){
						manifest.content_scripts[i].js[j] = js.replace(/.js$/,".min.js");
						grunt.log.ok("File " + chalk.cyan(js) + " set to " + chalk.cyan(js.replace(/.js$/,".min.js")));
					}
				});
			}
		});

		grunt.file.write(options.manifest, JSON.stringify(manifest, undefined, 4));
		done();
	});

	grunt.registerTask('build', [
		'clean:build',
		'uglify:build',
		'less:build',
		'copy:build',
		'clean:css',
		'clean:js',
		'setMinContentScripts',
		'compress'
	]);
};
