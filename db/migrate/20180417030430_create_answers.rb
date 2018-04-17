class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.text :sentence, null: false, index: true
      t.boolean :correct, null: false, default: false
      t.integer :question_id, null: false, foreign_key: true, index: true

      t.timestamps null: false, index: true
    end
  end
end
