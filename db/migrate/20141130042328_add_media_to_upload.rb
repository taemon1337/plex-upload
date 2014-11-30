class AddMediaToUpload < ActiveRecord::Migration
  def change
    add_column :uploads, :media, :string
  end
end
