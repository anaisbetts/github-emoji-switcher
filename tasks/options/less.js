module.exports = {
	build: {
		options: {
			cleancss: true
		},
		expand: true,
		cwd: "app/styles/",
		src: "*.less",
		dest: "build/css",
		ext: ".min.css"
	},
	debug: {
		options: {
			cleancss: true
		},
		expand: true,
		cwd: "app/styles/",
		src: "*.less",
		dest: "build/css",
		ext: ".min.css"
	}
};