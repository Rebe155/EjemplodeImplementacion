module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{ini,png,html,json,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};