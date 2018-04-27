class CreateLabels < ActiveRecord::Migration[5.1]
  def change
    create_table :labels do |t|
      t.integer :subject_id, null: false, foreign_key: true, index: true
      t.integer :image_id, null: false, foreign_key: true, index: true

      t.timestamps null: false, index: true
    end
  end
end
