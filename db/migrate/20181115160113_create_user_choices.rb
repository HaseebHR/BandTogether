class CreateUserChoices < ActiveRecord::Migration[5.2]
  def change
    create_table :user_choices do |t|
      t.references :user, foreign_key: true
      t.references :concert, foreign_key: true

      t.timestamps
    end
  end
end
