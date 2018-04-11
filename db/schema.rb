# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180411191355) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.string "question", null: false
    t.integer "deck_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_cards_on_created_at"
    t.index ["deck_id"], name: "index_cards_on_deck_id"
    t.index ["updated_at"], name: "index_cards_on_updated_at"
  end

  create_table "days", force: :cascade do |t|
    t.string "title"
    t.integer "week_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_days_on_created_at"
    t.index ["updated_at"], name: "index_days_on_updated_at"
    t.index ["week_id"], name: "index_days_on_week_id"
  end

  create_table "decks", force: :cascade do |t|
    t.string "title", null: false
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_decks_on_created_at"
    t.index ["title"], name: "index_decks_on_title", unique: true
    t.index ["updated_at"], name: "index_decks_on_updated_at"
  end

  create_table "sides", force: :cascade do |t|
    t.text "answer", null: false
    t.boolean "correct", default: false, null: false
    t.integer "card_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["answer"], name: "index_sides_on_answer"
    t.index ["card_id"], name: "index_sides_on_card_id"
    t.index ["created_at"], name: "index_sides_on_created_at"
    t.index ["updated_at"], name: "index_sides_on_updated_at"
  end

  create_table "topics", force: :cascade do |t|
    t.string "title"
    t.integer "day_id", null: false
    t.integer "deck_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_topics_on_created_at"
    t.index ["day_id"], name: "index_topics_on_day_id"
    t.index ["deck_id"], name: "index_topics_on_deck_id"
    t.index ["updated_at"], name: "index_topics_on_updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_users_on_created_at"
    t.index ["updated_at"], name: "index_users_on_updated_at"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "weeks", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_weeks_on_created_at"
    t.index ["updated_at"], name: "index_weeks_on_updated_at"
  end

end
