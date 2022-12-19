class UsersController < ApplicationController
    before_action :find_user, only: [:show]

    def index
        render json: User.all, status: :ok
    end

    
    # def show
    #     render json: @user, serializer: UserRecipeSerializer, status: :ok
    # end

        def show
          user = User.find_by(id: session[:user_id])
          if user
            render json: user
          else
            render json: { error: "Not authorized" }, status: :unauthorized
          end
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

