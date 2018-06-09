const url = {
	development: {
		apiUrl: 'http://106.15.41.164:8080',
		port: 8080,
		autoOpenBrowser: true,
		proxyFilter: '/wms'
	},
	production: {
		apiUrl: ''
	}
}

module.exports = url;