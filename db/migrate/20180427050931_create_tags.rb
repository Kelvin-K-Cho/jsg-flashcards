class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.integer :topic_id, null: false, foreign_key: true, index: true
      t.integer :image_id, null: false, foreign_key: true, index: true

      t.timestamps null: false, index: true
    end
  end
end
