class CommentSerializer < ActiveModel::Serializer
  attributes :description, :recipe_id, :user_id
end
