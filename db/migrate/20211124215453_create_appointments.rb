class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.datetime :date
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :sitter, null: false, foreign_key: true

      t.timestamps
    end
  end
end
