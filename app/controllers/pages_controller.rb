class PagesController < ApplicationController

	def home
		gon.folders = Folder.new.index
	end

end
