Rails.application.routes.draw do
  
  resources :appointments, only: [:index, :create, :update, :destroy]
  resources :sitters, only: [:index, :show]
  resources :users 
  resources :reviews
  resources :sitters, only: [:show] do 
    resources :reviews, only: [:index, :create]
  end
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # get "/sitters/:id/reviews", to: reviews#index

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
