class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.belongs_to :liker, foreign_key: { to_table: :users }
      t.belongs_to :likee, foreign_key: { to_table: :users }

      t.timestamps
    end
    add_column :concerts, :name, :string
  end
end
