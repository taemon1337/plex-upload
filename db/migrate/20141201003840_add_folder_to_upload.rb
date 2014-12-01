class AddFolderToUpload < ActiveRecord::Migration
  def change
    add_column :uploads, :folder, :string
  end
end
