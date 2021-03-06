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

ActiveRecord::Schema.define(version: 2018_11_19_073823) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bands", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "concerts", force: :cascade do |t|
    t.string "date"
    t.string "location"
    t.string "url"
    t.bigint "band_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "imgurl"
    t.string "name"
    t.index ["band_id"], name: "index_concerts_on_band_id"
  end

  create_table "likes", force: :cascade do |t|
    t.bigint "liker_id"
    t.bigint "likee_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["likee_id"], name: "index_likes_on_likee_id"
    t.index ["liker_id"], name: "index_likes_on_liker_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.string "name"
    t.string "gender"
    t.integer "age"
    t.string "city"
    t.integer "min_age"
    t.integer "max_age"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "phone"
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "user_bands", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "band_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["band_id"], name: "index_user_bands_on_band_id"
    t.index ["user_id"], name: "index_user_bands_on_user_id"
  end

  create_table "user_choices", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "concert_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["concert_id"], name: "index_user_choices_on_concert_id"
    t.index ["user_id"], name: "index_user_choices_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "provider"
    t.string "uid"
    t.string "token"
    t.string "imgurl"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["provider", "uid"], name: "index_users_on_provider_and_uid"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "concerts", "bands"
  add_foreign_key "likes", "users", column: "likee_id"
  add_foreign_key "likes", "users", column: "liker_id"
  add_foreign_key "profiles", "users"
  add_foreign_key "user_bands", "bands"
  add_foreign_key "user_bands", "users"
  add_foreign_key "user_choices", "concerts"
  add_foreign_key "user_choices", "users"
end
