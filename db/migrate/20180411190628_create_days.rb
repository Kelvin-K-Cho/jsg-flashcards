class CreateDays < ActiveRecord::Migration[5.1]
  def change
    create_table :days do |t|
      t.string :title
      t.integer :week_id, null: false, foreign_key: true, index: true

      t.timestamps null: false, index: true
    end
  end
end
