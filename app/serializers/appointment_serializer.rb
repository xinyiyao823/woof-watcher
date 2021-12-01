class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :sitter_id, :sitter
  # has_one :user
  # belongs_to :sitter, serializer: SitterSerializer

  def sitter
      ::SitterSerializer.new(object.sitter)
    end



end
