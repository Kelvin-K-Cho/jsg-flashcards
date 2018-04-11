class CreateTopics < ActiveRecord::Migration[5.1]
  def change
    create_table :topics do |t|
      t.string :title, null: false, unique: true, index: { unique: true }

      t.timestamps null: false, index: true
    end
  end
end
