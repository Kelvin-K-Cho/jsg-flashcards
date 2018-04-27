class CreateSubjects < ActiveRecord::Migration[5.1]
  def change
    create_table :subjects do |t|
      t.string :title, null: false, unique: true, index: { unique: true }
      t.string :image_url

      t.timestamps null: false, index: true
    end
  end
end