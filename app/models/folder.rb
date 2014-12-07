class Folder
	attr_accessor :root

	def initialize(opts={})
		@root = opts[:root] || Rails.root
		@regex = opts[:regex] || /^[a-z]/i
	end


	def index
		tree("plex")
	end

	def show(params)
		tree(File.join("plex",params[:path]))
	end

	private

	def tree(path)
		real_path = File.join(@root,path)
		raise "Cannot enumabte path outside of application root! #{real_path.inspect} - #{@root.inspect}" unless real_path.starts_with?(@root.to_s)

		Dir.entries(real_path).collect { |f|
			full_path = File.join(path,File.basename(f))
			{ 
				name: f,
				label: f.gsub(/[_-]/,' ').gsub("'",'"').split.map(&:capitalize).join(' '),
				href: full_path,
			} if f.match(@regex) and File.directory?(full_path)
		}.compact
	end

end
