const url = {
	development: {
		apiUrl: 'http://106.14.251.99',
		port: 8080,
		autoOpenBrowser: true,
		proxyFilter: '/wms'
	},
	production: {
		apiUrl: ''
	}
}

module.exports = url;