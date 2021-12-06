class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :email, :password
  has_many :appointments, serializer: AppointmentSerializer
  has_many :reviews
end
