class SittersController < ApplicationController
    def index  
        sitters = Sitter.all
        render json: sitters, status: :ok
    end

    def show 
        sitter = Sitter.find(params[:id])
        render json: sitters, status: :ok
    end
end
