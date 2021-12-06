# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_05_193634) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.datetime "date"
    t.bigint "user_id", null: false
    t.bigint "sitter_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["sitter_id"], name: "index_appointments_on_sitter_id"
    t.index ["user_id"], name: "index_appointments_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "review"
    t.bigint "user_id", null: false
    t.bigint "sitter_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["sitter_id"], name: "index_reviews_on_sitter_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "sitters", force: :cascade do |t|
    t.string "name"
    t.integer "hourly_rate"
    t.string "location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "appointments", "sitters"
  add_foreign_key "appointments", "users"
  add_foreign_key "reviews", "sitters"
  add_foreign_key "reviews", "users"
end
