class Sitter < ApplicationRecord
    has_many :appointments, dependent: :destroy
    has_many :users, through: :appointments
    has_many :reviews
    has_many :users, through: :reviews

    validates :hourly_rate, numericality: { only_integer: true }
end
