class Upload < ActiveRecord::Base
  attr_accessible :media, :media_cache, :folder

	mount_uploader :media, MediaUploader

end
