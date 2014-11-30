class UploadController < ApplicationController

	def create
		upload = Upload.new(params[:upload])

		if upload.save
			render json: upload
		else
			render json: { error: "Error saving upload", status: :unprocessable_entity }
		end
	end

end
