class CreateTopics < ActiveRecord::Migration[5.1]
  def change
    create_table :topics do |t|
      t.string :title
      t.integer :day_id, null: false, foreign_key: true, index:true
      t.integer :deck_id, null: false, foreign_key: true, index:true

      t.timestamps null: false, index: true
    end
  end
end
