class SitterSerializer < ActiveModel::Serializer
  attributes :id, :name, :hourly_rate, :location
  has_many :reviews
end
