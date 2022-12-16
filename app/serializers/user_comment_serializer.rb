class UserCommentSerializer < UserRecipeSerializer
  has_many :comments
end
