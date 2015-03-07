module.exports = function (grunt) {
	grunt.registerTask('default', [
		'less:debug',
		'copy:debug',
		'copy:js',
		'clean:css']);
};
