class User < ApplicationRecord
    has_secure_password
    has_many :appointments, dependent: :destroy
    has_many :sitters, through: :appointments

    validates :full_name, presence: true
    validates :password, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :age, numericality: { only_integer: true }

end
end
