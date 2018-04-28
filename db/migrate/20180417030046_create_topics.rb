class CreateTopics < ActiveRecord::Migration[5.1]
  def change
    create_table :topics do |t|
      t.string :title, null: false, unique: true, index: { unique: true }
      t.text :notes
      t.integer :subject_id, null: false, foreign_key: true, index: true

      t.timestamps null: false, index: true
    end
  end
end
