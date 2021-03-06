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

ActiveRecord::Schema.define(version: 20180503174812) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.text "sentence", null: false
    t.boolean "correct", default: false
    t.integer "question_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_answers_on_created_at"
    t.index ["question_id"], name: "index_answers_on_question_id"
    t.index ["sentence"], name: "index_answers_on_sentence"
    t.index ["updated_at"], name: "index_answers_on_updated_at"
  end

  create_table "dailies", force: :cascade do |t|
    t.integer "topic_id", null: false
    t.integer "day_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_dailies_on_created_at"
    t.index ["day_id"], name: "index_dailies_on_day_id"
    t.index ["topic_id"], name: "index_dailies_on_topic_id"
    t.index ["updated_at"], name: "index_dailies_on_updated_at"
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

  create_table "feedbacks", force: :cascade do |t|
    t.text "comments"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_feedbacks_on_created_at"
    t.index ["updated_at"], name: "index_feedbacks_on_updated_at"
  end

  create_table "images", force: :cascade do |t|
    t.text "url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_images_on_created_at"
    t.index ["updated_at"], name: "index_images_on_updated_at"
    t.index ["url"], name: "index_images_on_url"
  end

  create_table "labels", force: :cascade do |t|
    t.integer "subject_id", null: false
    t.integer "image_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_labels_on_created_at"
    t.index ["image_id"], name: "index_labels_on_image_id"
    t.index ["subject_id"], name: "index_labels_on_subject_id"
    t.index ["updated_at"], name: "index_labels_on_updated_at"
  end

  create_table "questions", force: :cascade do |t|
    t.string "sentence", null: false
    t.integer "topic_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_questions_on_created_at"
    t.index ["topic_id"], name: "index_questions_on_topic_id"
    t.index ["updated_at"], name: "index_questions_on_updated_at"
  end

  create_table "subjects", force: :cascade do |t|
    t.string "title", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_subjects_on_created_at"
    t.index ["title"], name: "index_subjects_on_title", unique: true
    t.index ["updated_at"], name: "index_subjects_on_updated_at"
  end

  create_table "suggestions", force: :cascade do |t|
    t.text "comments", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_suggestions_on_created_at"
    t.index ["updated_at"], name: "index_suggestions_on_updated_at"
  end

  create_table "tags", force: :cascade do |t|
    t.integer "topic_id", null: false
    t.integer "image_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_tags_on_created_at"
    t.index ["image_id"], name: "index_tags_on_image_id"
    t.index ["topic_id"], name: "index_tags_on_topic_id"
    t.index ["updated_at"], name: "index_tags_on_updated_at"
  end

  create_table "topics", force: :cascade do |t|
    t.string "title", null: false
    t.text "notes"
    t.integer "subject_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_topics_on_created_at"
    t.index ["subject_id"], name: "index_topics_on_subject_id"
    t.index ["title"], name: "index_topics_on_title", unique: true
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
