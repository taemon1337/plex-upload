plex.components.folders = {
	route: function(evt, options) {
		plex.log("routing to folders");
		var view = plex.components.folders.view(options || {});
		$('#application').html( view.render() );
	},

	view: function(options) {
		var model = plex.components.folders.model(options);

		var view = new kendo.View('folders-template', {
			model: model,
		});

		return view;
	},

	datasource: function(options) {
		var url ="/plex";
		if(options.folder) { url = options.folder.href }
		window.location.hash = url;

		if(gon.folders) {
			data = gon.folders;
			delete gon.folders;
			return new kendo.data.DataSource({
				data: data
			});
		} else {
			return new kendo.data.DataSource({
				transport: {
					read: {
						url: url,
						method: "get",
						dataType: "json",
					}
				}
			});
		}
	},

	model: function(options) {
		return kendo.observable({
			isVisible: true,

			folders: plex.components.folders.datasource(options),

			showFolder: function(e) {
				e.preventDefault();
				plex.trigger("folder:show", { folder: e.data });
			},

		});
	},
}

plex.bind("/", plex.components.folders.route);
plex.bind("folder:show", plex.components.folders.route);
