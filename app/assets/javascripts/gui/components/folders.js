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
			data: [
				{ label: 'Movies', name: 'movies' },
				{ label: 'Home Videos', name: 'home_video' },
				{ label: 'Music Videos', name: 'music_video' },
				{ label: 'Soccer Videos', name: 'soccer' },
				{ label: 'Educational', name: 'educational' },
				{ label: 'Music', name: 'music' },
				{ label: 'Photos', name: 'photos' },
			]
		});
	},

	model: function(options) {
		return kendo.observable({
			isVisible: true,

			folders: plex.components.folders.datasource(),

		});
	},
}

plex.bind("/", plex.components.folders.route);
