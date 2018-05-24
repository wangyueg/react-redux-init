function createUrl (request) {
  	let url = request.url
  	let param = request.param

  	if(param) {
    	url = !url.includes('?') && url + '?'
    	for (let key of Object.keys(param)) {
      		url = url + key + '=' + param[key] + '&'
    	}
	    if (url.endsWith('&')) {
	      	url = url.substring(0, url.length - 1)
	    }
  	}
  	return url
}

export {
	createUrl
}