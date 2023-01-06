class RecipesController < ApplicationController
    before_action :find_recipe, only: [:show, :destroy, :update]

    def index
        render json: Recipe.all, status: :ok
    end

    
    def show
        render json: @recipe, serializer: RecipeSerializer, status: :ok
    end

    def create 
        puts recipe_params
        render json: Recipe.create!(recipe_params), status: :created 
    end

    def destroy
        @recipe.destroy
        head :no_content 
    end

    def update
        recipe = Recipe.find(params[:id])
        recipe.update(recipe_params)
        render json: recipe, status: :accepted
    end

    private

def find_recipe
    @recipe = Recipe.find(params[:id])
end

def recipe_params
    params.permit(:name, :ingredients, :description, :user_id)
end

end
