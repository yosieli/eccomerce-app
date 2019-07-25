class CartsController < ApplicationController 

    def myCart
        user = User.find_by_username(params[:username])
        cart = Cart.where(user_id: user.id)
        render json: cart
    end

    def create
        user = User.find_by_username(params[:username])
        item = AllItem.find(params[:itemId])
        Cart.create(user_id: user.id, item_id: item.id, quantity: 1, item_name: item.item_name, price: item.price, image_url: item.image_url)
    end
    

    def destroy
        user = User.find_by_username(params[:username])
        item = AllItem.find(params[:itemId])
        unwantedItem = Cart.where(user_id: user.id, item_id: item.id)
        Cart.destroy(unwantedItem.ids)
    end
end