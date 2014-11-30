var uploader = plex.components.uploader = {
	route: function(options) {
		var view = uploader.view(options);
		$('#application').before( view.render() );
	},

	select: function(options) {
		$("#uploader").click();
	},

	view: function(options) {
		var model = uploader.model(options);

		var view = new kendo.View('uploader-template', {
			model: model,
			init: function() {
			},
		});

		return view;
	},

	model: function(options) {
		return kendo.observable({
			isVisible: true,
		});
	},
}

//plex.bind("/", uploader.route);
plex.bind("uploader:select", uploader.select);
