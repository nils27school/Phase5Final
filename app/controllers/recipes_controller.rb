class RecipesController < ApplicationController
    before_action :find_recipe, only: [:show, :destroy]

    def index
        render json: Recipe.all, status: :ok
    end

    
    def show
        render json: @recipe, serializer: RecipeActivitySerializer, status: :ok
    end

    def create 
        render json: Recipe.create!(recipe_params), status: :created 
    end

    def destroy
        @recipe.destroy
        head :no_content 
    end

    private

def find_recipe
    @recipe = Recipe.find(params[:id])
end

def recipe_params
    params.permit(:name, :ingredients, :description)
end

end
