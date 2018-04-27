class CreateDailies < ActiveRecord::Migration[5.1]
  def change
    create_table :dailies do |t|
      t.string :title
      t.integer :topic_id, null: false, foreign_key: true, index: true
      t.integer :day_id, null: false, foreign_key: true, index: true

      t.timestamps null: false, index: true
    end
  end
end
