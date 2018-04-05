class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false, index: { unique: true }
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps null: false, index: { unique: true }
    end
  end
end
