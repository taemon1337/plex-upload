plex.components.folders = {
	route: function(options) {
		plex.log("routing to folders");
		var view = plex.components.folders.view(options);
		$('#application').html( view.render() );
	},

	view: function(options) {
		var model = plex.components.folders.model(options);

		var view = new kendo.View('folders-template', {
			model: model,
			init: function() {
			},
		});

		return view;
	},

	datasource: function(options) {
		return new kendo.data.DataSource({
			transport: {
				read: {
					url: "/folders",
					method: "get",
					dataType: "json",
				}
			}
		});
	},

	model: function(options) {
		return kendo.observable({
			isVisible: true,

			folders: plex.components.folders.datasource(),

			openFolder: function(e) {
				plex.trigger("folder:show", {})
			},

		});
	},
}

plex.bind("/", plex.components.folders.route);
