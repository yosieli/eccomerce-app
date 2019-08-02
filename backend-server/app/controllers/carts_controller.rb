class CartsController < ApplicationController 

    

    def myCart
        cart = Cart.where(user_id: @current_user.id)
        render json: cart
    end

    def create
        item = AllItem.find(params[:itemId])
        puts @current_user.id,  "hello"
        Cart.create(user_id: @current_user.id, item_id: item.id, quantity: 1, item_name: item.item_name, price: item.price, image_url: item.image_url)
    end
    

    def destroy
        item = AllItem.find(params[:itemId])
        unwantedItem = Cart.where(user_id: @current_user.id, item_id: item.id)
        Cart.destroy(unwantedItem.ids)
    end

    def destroyAll 
        user = User.find(params[:id]) 
        Cart.where(user_id: @current_user.id).destroy_all
    end
end