class CreateConcerts < ActiveRecord::Migration[5.2]
  def change
    create_table :concerts do |t|
      t.datetime :date
      t.string :location
      t.string :url
      t.references :band, foreign_key: true

      t.timestamps
    end
  end
end
