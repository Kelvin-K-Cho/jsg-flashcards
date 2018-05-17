class CreateWeeks < ActiveRecord::Migration[5.1]
  def change
    create_table :weeks do |t|
      t.string :title

      t.timestamps null: false, index: true
    end
  end
end
