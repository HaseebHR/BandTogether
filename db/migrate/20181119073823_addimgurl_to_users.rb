class AddimgurlToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :imgurl, :string
    add_column :profiles, :phone, :string
  end
end
