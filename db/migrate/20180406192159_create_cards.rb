class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :question, null: false, unique: true
      t.integer :deck_id, null: false, foreign_key: true, index: true

      t.timestamps null: false, index: true
    end
  end
end
