class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.string :sentence, null: false, unique: true
      t.integer :topic_id, null: false, foreign_key: true, index: true

      t.timestamps null: false, index: true
    end
  end
end
