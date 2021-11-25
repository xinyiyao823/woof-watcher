class Sitter < ApplicationRecord
    has_many :appointments, dependent: :destroy
    has_many :users, through: :appointments

    validates :hourly_rate, numericality: { only_integer: true }
end
