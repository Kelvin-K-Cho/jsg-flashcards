class CreateDecks < ActiveRecord::Migration[5.1]
  def change
    create_table :decks do |t|
      t.string :title, null: false, unique: true, index: { unique: true }
      t.text :notes

      t.timestamps null: false, index: true
    end
  end
end
