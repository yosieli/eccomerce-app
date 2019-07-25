Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/allItems', to: "all_items#index"

  get '/cartItems/:username', to: "carts#myCart"
  post '/addToCart/:username/:itemId', to: "carts#create"
  delete '/cartItems/:username/:itemId', to: "carts#destroy"

  get '/favoriteItems/:username', to: "favorites#myFavorite"
  post '/addToFavorites/:username/:itemId', to: "favorites#create"
  delete '/favoriteItems/:username/:itemId', to: "favorites#destroy"
end
