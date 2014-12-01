PlexUpload::Application.routes.draw do

	post '/upload/:folder' => 'upload#create'

  root :to => 'pages#home'

end
