class SittersController < ApplicationController
    skip_before_action :authorize, only: [:index,:show,:create,:update,:destroy]

    def index  
        sitters = Sitter.all
        render json: sitters, status: :ok
    end

    def show 
        sitter = Sitter.find(params[:id])
        render json: sitters, status: :ok
    end
end
