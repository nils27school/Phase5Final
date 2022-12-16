Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

resources :users, only: [:index, :show, :create]

resources :comments, only: [:index, :show, :create, :destroy]

resources :recipes, only: [:index, :show, :create, :destroy]

end
