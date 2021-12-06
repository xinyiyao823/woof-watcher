class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :review, :user_id, :sitter_id
  end