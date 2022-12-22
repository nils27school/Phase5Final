class UsersController < ApplicationController
    # before_action :find_user, only: [:show]

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
      user = User.create(user_params)
      if user.valid? 
        session[:user_id] = user.id 
        render json: user, status: :created
      else
        render json: [error: user.errors.full_messages], status: :unprocessable_entity 
      end
    end

    private

# def find_user
#     @user = User.find(params[:id])
# end

def user_params
    params.permit(:name, :age, :password, :email, :background)
end

end

