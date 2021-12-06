class ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:index,:show,:create,:update,:destroy]

    def index  
        if params[:sitter_id]
            reviews = Review.where(sitter_id: params[:sitter_id])
        else
            reviews = Review.all
        end
        render json: reviews, status: :ok
    end

    def show 
        review = Review.find(params[:id])
        render json: review, status: :ok
    end
end