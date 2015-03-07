module.exports = {
	build: {
		files: [{
			expand: true,
			cwd: 'app/scripts/',
			src: ['**/*.js', '!**/*.min.js'],
			dest: 'build/js',
			ext: '.min.js'
    }]
	}
};