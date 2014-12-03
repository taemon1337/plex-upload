class FoldersController < ApplicationController

	def index
		render json: Dir.entries(Plex.root).select { |f| f if f.match(/^[a-z]/i) }
	end

	def show
		path = File.join(Plex.root, params[:id])
		render json: Dir.entries(path).select { |f| f if f.match(/^[a-z]/i) }
	end

end
