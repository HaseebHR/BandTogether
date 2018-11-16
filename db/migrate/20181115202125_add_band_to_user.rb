class AddBandToUser < ActiveRecord::Migration[5.2]
  def change
    create_table :user_bands do |t|
      t.references :user, foreign_key: true
      t.references :band, foreign_key: true

      t.timestamps
    end
    
    add_column :concerts, :imgurl, :string
    change_column :profiles, :zip, :string
    rename_column :profiles, :zip, :city 
    change_column :concerts, :date, :string
  end
end
