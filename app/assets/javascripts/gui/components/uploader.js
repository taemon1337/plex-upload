plex.components.uploader = uploader = {
	route: function(options) {
		var view = uploader.view(options);
		$('#application').html( view.render() );
	},

	view: function(options) {
		var model = uploader.model(options);

		return new kendo.View('uploader-template', {
			model: model,
		});
	},

	model: function(options) {
		return kendo.observable({
			isVisible: true,
		});
	},
}

plex.bind("/", uploader.route);
