class CreateSides < ActiveRecord::Migration[5.1]
  def change
    create_table :sides do |t|
      t.text :answer, null: false, index: true
      t.boolean :correct, null: false, default: false
      t.integer :card_id, null: false, foreign_key: true, index: true

      t.timestamps null: false, index: true
    end
  end
end
