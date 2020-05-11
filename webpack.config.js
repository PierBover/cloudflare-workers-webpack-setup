const path = require('path');

module.exports = {
	target: 'webworker',
	entry: './index.js',
	output: {
		filename: 'index.js',
		path: path.join(__dirname, 'dist')
	},
	context: path.resolve(__dirname),
	mode: 'production'
}