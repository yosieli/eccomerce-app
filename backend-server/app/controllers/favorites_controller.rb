class FavoritesController < ApplicationController

    
 
    def myFavorite
        favorite = Favorite.where(user_id: @current_user.id)
        render json: favorite
    end

    def create
        item = AllItem.find(params[:itemId])
        Favorite.create(user_id: @current_user.id, item_id: item.id, item_name: item.item_name, price: item.price, image_url: item.image_url, description: item.description)
    end
    
    def index 
        if @current_user.id
            render json: @current_user.id.favorites
        else
            render json: []
        end
    end

    def destroy
        item = AllItem.find(params[:itemId])
        unwantedItem = Favorite.where(user_id: @current_user.id, item_id: item.id)
        Favorite.destroy(unwantedItem.ids)
    end

    
end



