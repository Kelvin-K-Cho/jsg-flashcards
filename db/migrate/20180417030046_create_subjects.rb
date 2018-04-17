class CreateSubjects < ActiveRecord::Migration[5.1]
  def change
    create_table :subjects do |t|
      t.string :title, null: false, unique: true, index: { unique: true }
      t.text :notes
      t.string :image_url
      t.integer :topic_id, null: false, foreign_key: true, index: true

      t.timestamps null: false, index: true
    end
  end
end
