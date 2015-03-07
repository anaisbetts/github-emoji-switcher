module.exports = {
	build: {
		// clear build folder
		src: ['build']
	},
	css: {
		// remove 
		src: ['build/css/vars.min.css']
	},
	js: {
		// remove all non-minified js
		src: ['build/js/*.js', '!build/js/*.min.js']
	}
};
