class CreateSuggestions < ActiveRecord::Migration[5.1]
  def change
    create_table :suggestions do |t|
      t.text :comments, null: false

      t.timestamps null: false, index: true
    end
  end
end
