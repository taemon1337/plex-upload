PlexUpload::Application.routes.draw do

	post '/upload/:path' => 'upload#create'

  root :to => 'pages#home'

end
