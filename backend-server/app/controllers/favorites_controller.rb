class FavoritesController < ApplicationController

    # skip_before_action :define_current_user, only: [ :myFavorite]
 
    def myFavorite
        user = User.find_by_username(params[:username])
        favorite = Favorite.where(user_id: user.id)
        render json: favorite
    end

    def create
        user = User.find_by_username(params[:username])
        item = AllItem.find(params[:itemId])
        Favorite.create(user_id: user.id, item_id: item.id, item_name: item.item_name, price: item.price, image_url: item.image_url, description: item.description)
    end
    
    def index 
        if current_user
            render json: current_user.favorites
        else
            render json: []
        end
    end

    def destroy
        user = User.find_by_username(params[:username])
        item = AllItem.find(params[:itemId])
        unwantedItem = Favorite.where(user_id: user.id, item_id: item.id)
        Favorite.destroy(unwantedItem.ids)
    end

    
end



