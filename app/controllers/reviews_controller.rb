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

    def create 
        review = Review.create(review_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: { error: "Can't create review" }, status: :unprocessable_entity
        end
    end

    private 

    def review_params
        params.permit(:review, :user_id, :sitter_id)
    end
end