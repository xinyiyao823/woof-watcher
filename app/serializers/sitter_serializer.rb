class SitterSerializer < ActiveModel::Serializer
  attributes :id, :name, :hourly_rate, :location
end
