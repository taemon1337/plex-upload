class FoldersController < ApplicationController
	before_filter :get_plex_folder

	def show
		render json: @folder.show(params)
	end

	private

	def get_plex_folder
		@folder = Folder.new
	end

end
