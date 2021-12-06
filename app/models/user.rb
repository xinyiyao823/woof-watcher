class User < ApplicationRecord
    has_secure_password

    has_many :appointments, dependent: :destroy
    has_many :sitters, through: :appointments
    has_many :reviews
    has_many :sitters, through: :reviews

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :age, numericality: { only_integer: true }


end
