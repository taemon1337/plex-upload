# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'fileutils'

root = Rails.root.join("public","folders")
FileUtils.mkdir(root) unless File.exists?(root)

folders = [
	"movies",
	"home_video",
	"music_video",
	"soccer",
	"educational",
	"music",
	"photos",
]

folders.each do |folder|
	path = File.join(root, folder)
	FileUtils.mkdir(path) unless File.exists?(path)
end

