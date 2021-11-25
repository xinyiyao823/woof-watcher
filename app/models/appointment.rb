class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :sitter

  validates :date, presence: true, uniqueness: true
end
