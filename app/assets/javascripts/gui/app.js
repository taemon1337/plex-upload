window.plex = plex = {
	components: {},
	event: $(document.createElement("div")),
	stack: [],
}

plex.start = function(options) {
	plex.trigger("init:before");
	plex.trigger("/"); // root route
	plex.trigger("init:after");
}

