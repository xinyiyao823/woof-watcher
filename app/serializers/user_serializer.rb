class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :age, :email, :password
end
