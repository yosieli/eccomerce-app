Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :favorites

  get '/allItems', to: "all_items#index"

  get '/cartItems', to: "carts#myCart"
  post '/addToCart/:itemId', to: "carts#create"
  delete '/cartItems/:itemId', to: "carts#destroy"

  get '/favoriteItems', to: "favorites#myFavorite"
  post '/addToFavorites/:itemId', to: "favorites#create"
  delete '/favoriteItems/:itemId', to: "favorites#destroy"

  delete '/cartItems',to: "carts#destroyAll"



  post '/login', to: 'users#authenticate'
  post '/signup', to: 'users#create'

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
