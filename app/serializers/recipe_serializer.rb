class RecipeSerializer < ActiveModel::Serializer
  attributes :name, :ingredients, :description, :user_id, :id
end
