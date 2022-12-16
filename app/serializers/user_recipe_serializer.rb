class UserRecipeSerializer < UserSerializer
  has_many :recipes
end
