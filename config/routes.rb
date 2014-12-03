PlexUpload::Application.routes.draw do

	post '/upload/:folder' => 'upload#create'

	resources :folders, :only => [:index,:show]

  root :to => 'pages#home'

end
