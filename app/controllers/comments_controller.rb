class CommentsController < ApplicationController

    before_action :find_recipe, only: [:show, :destroy]

    def index
        render json: Comment.all, status: :ok
    end

    
    def show
        render json: @comment, serializer: UserCommentSerializer, status: :ok
    end

    def create 
        render json: Comment.create!(comment_params), status: :created 
    end

    def destroy
        @comment.destroy
        head :no_content 
    end

    private

def find_comment
    @comment = Comment.find(params[:id])
end

def comment_params
    params.permit(:description, :recipe_id, :user_id)
end

end


