class Upload < ActiveRecord::Base
  attr_accessible :media, :media_cache

	mount_uploader :media, MediaUploader

end
