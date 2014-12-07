PlexUpload::Application.routes.draw do

	post '/upload/:folder' => 'upload#create'
	get "/plex/*path" => 'folders#show'

  root :to => 'pages#home'

end
