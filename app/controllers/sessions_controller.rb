class SessionsController < ApplicationController
    def create
      # binding.pry
      user = User.find_by!(email: params[:email])
      session[:user_id] = user.id
      render json: user
    end

    def destroy
        session.delete :user_id
        head :no_content
      end
      
  end