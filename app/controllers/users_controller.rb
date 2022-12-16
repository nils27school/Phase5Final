class UsersController < ApplicationController
    before_action :find_user, only: [:show]

    def index
        render json: User.all, status: :ok
    end

    
    def show
        render json: @user, serializer: UserRecipeSerializer, status: :ok
    end

    def create 
        render json: User.create!(user_params), status: :created 
    end

    private

def find_user
    @user = User.find(params[:id])
end

def user_params
    params.permit(:name, :age, :password_digest, :email, :background)
end

end

