class UsersController < ApplicationController
     skip_before_action :authorize, only: [:create, :index]
    
    def index
        render json: User.all
    end

    def show
        # # user = User.find_by(id: session[:user_id])
        # user = User.find_by(id: session[:user_id])
        # if user
        #     render json: user, include: ['appointments', 'appointments.sitter'], status: :ok
        # else
        #     render json: { error: "Not authorized" }, status: :unauthorized
        # end
         render json: @current_user, include: ['appointments', 'appointments.sitter'], status: :ok
    end

  
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, include: ['appointments', 'appointments.sitter']
    end

    private 

    def user_params
        params.permit(:name, :email, :password, :age)
    end
end
