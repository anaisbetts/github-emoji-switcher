module.exports = {
	build: {
		options: {
			archive: 'archive/<%= pkg.name %>-<%= pkg.version %>.zip'
		},
		files: [{
			expand: true,
			cwd: 'build/',
			src: ['**/**'],
			dest: '.'
          }]
	}
};