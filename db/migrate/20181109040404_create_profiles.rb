class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :gender
      t.integer :age
      t.integer :zip
      t.integer :min_age
      t.integer :max_age
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
