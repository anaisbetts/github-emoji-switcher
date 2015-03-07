module.exports = {
	build: {
		files: [{
			expand: true,
			cwd: 'app',
			src: ['manifest.json', 'img/**/*.*', 'libs/**/*.*'],
			dest: 'build'
    }]
	},
	debug: {
		files: [{
			expand: true,
			cwd: 'app',
			src: ['manifest.json', 'img/**/*.*', 'libs/**/*.*'],
			dest: 'build'
    }]
	},
	manifest: {
		files: [{
			expand: true,
			cwd: 'app',
			src: ['manifest.json'],
			dest: 'build'
    }]
	},
	img: {
		files: [{
			expand: true,
			cwd: 'app/img/',
			src: ['*'],
			dest: 'build/img'
    }]
	},
	js: {
		files: [{
			expand: true,
			cwd: 'app/scripts/',
			src: ['*.js'],
			dest: 'build/js'
    }]
	}
};
