# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
AllItem.delete_all
Cart.delete_all

pepper = AllItem.create(item_name: "Pepper", price: 2, image_url:"http://pluspng.com/img-png/pepper-hd-png-pepper-png-pluspng-com-455-pepper-png-455.png", description: "spicy")
car = AllItem.create(item_name: "Toy Car", price: 5, image_url: "https://png.pngtree.com/element_pic/16/11/28/47d236453a25b94ecf3f44ecaf73180e.jpg", description: "Super Fast")
mac = AllItem.create(item_name: "MacBook", price: 5999, image_url: "http://www.sclance.com/pngs/computer-png/computer_png_310551.png", description: "Super Smart")


hk72 = User.create(username: "hk72", password:"1")
hk73 = User.create(username: "hk73", password:"2")


Cart.create(user_id: hk72.id, item_id: pepper.id  ,quantity: 1, item_name: pepper.item_name, price: pepper.price, image_url: pepper.image_url)
Cart.create(user_id: hk73.id, item_id: car.id, quantity: 1, item_name: car.item_name , price: car.price, image_url: car.image_url)

Favorite.create(user_id: hk72.id, item_id: pepper.id, item_name: pepper.item_name, price: pepper.price, image_url: pepper.image_url, description: pepper.description)
Favorite.create(user_id: hk73.id, item_id: car.id, item_name: car.item_name, price: car.price, image_url: car.image_url, description: car.description)
puts "We seeded"