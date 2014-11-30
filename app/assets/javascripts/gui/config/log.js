plex.log = function() {
	if(console) {
		console.log.apply(console, arguments);
	}
}

plex.warn = function() {
	if(console) {
		console.warn.apply(console, arguments);
	}
}

plex.error = function() {
	if(console) {
		console.error.apply(console, arguments);
	}
}
