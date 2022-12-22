class User < ApplicationRecord
    has_many :recipes
    has_many :comments
    has_many :recipe_comments, through: :recipes, source: :recipes

    validates :email, presence: true
has_secure_password 
end
