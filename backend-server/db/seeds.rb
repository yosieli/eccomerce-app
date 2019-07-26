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

pepper = AllItem.create(item_name: "Pepper", price: 2, image_url:"http://pluspng.com/img-png/pepper-hd-png-pepper-png-pluspng-com-455-pepper-png-455.png", description: "Spicy")
car = AllItem.create(item_name: "Toy Car", price: 5, image_url: "https://png.pngtree.com/element_pic/16/11/28/47d236453a25b94ecf3f44ecaf73180e.jpg", description: "Super Fast")
AllItem.create(item_name: "MacBook", price: 5999, image_url: "http://www.sclance.com/pngs/computer-png/computer_png_310551.png", description: "Super Smart")
AllItem.create(item_name: "Headphones", price: 300, image_url: "https://png.pngtree.com/element_pic/16/11/01/16acb61330873cf685ad1c4508ecb477.jpg", description: "Great Sound")
AllItem.create(item_name: "Monitor", price: 120, image_url: "https://banner2.kisspng.com/20171202/45c/monitor-png-image-5a22a9dbe1eb78.5424563315122211479254.jpg", description: "Great Display")
AllItem.create(item_name: "Keyboard", price: 512, image_url: "https://banner2.kisspng.com/20171216/9f5/pc-keyboard-png-image-5a3565dadd98b2.7025090615134489229077.jpg", description: "Great Types")
AllItem.create(item_name: "Mouse", price: 34, image_url: "https://banner2.kisspng.com/20180408/wye/kisspng-computer-mouse-computer-keyboard-laptop-logitech-computer-mouse-5acaaed6ce1f58.4705052315232324708443.jpg", description: "Great Search")
AllItem.create(item_name: "Soccer Ball", price: 25, image_url: "https://www.pinclipart.com/picdir/middle/1-11815_printable-picture-of-a-soccer-ball-clipart-soccer.png", description: "Rolls")
AllItem.create(item_name: "Basketball Ball", price: 26, image_url: "https://www.pinclipart.com/picdir/middle/192-1923469_basketball-ball-png-clip-art-image-transparent-basketball.png", description: "Coincidently also Rolls")
AllItem.create(item_name: "Tennis Ball", price: 3, image_url: "https://encrypted-tbn0.gstatic.com/imagtbn:ANd9GcRAVhlzymdqmTe_lkBvSLoyZXuCgYsxru78BkaMOKgIs_Sc7NSz", description: "Might Roll")
AllItem.create(item_name: "Spiderman Ps4", price: 59, image_url: "https://www.pngfind.com/pngs/m/22-220713_download-free-high-quality-spiderman-png-transparent-spider.png", description: "Spiderman, Spiderman, does whatever a spider can
    Spins a web any size, catches thieves just like flies
    Look out, here comes the Spiderman
    Is he strong? Listen bud, he's got radioactive blood
    Can he swing from a thread? Take a look overhead
    Hey, there! There goes the Spiderman
    In the chill of the night At the scene of a crime
    Like a streak of light he arrives just in time
    Spiderman, Spiderman, friendly neighborhood, Spiderman
    Wealth and fame, he ignores, action is his reward
    Look out, here comes the Spiderman
    Spiderman, Spiderman, friendly neighborhood, Spiderman
    Wealth and fame, he ignores, action is his reward
    To him, life's a great big bang up, whenever there's a hang up, 
    You'll find the Spiderman!")
AllItem.create(item_name: "Iron Man", price: 5, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6m7rWiYCai_h8jo1-V_s8QUHwKeTepkRz7gmkW3CGTOpL4U19", description: "Just keeping an eye on spiderman")
AllItem.create(item_name: "Samsung S 10", price: 1000, image_url: "https://www.searchpng.com/wp-content/uploads/2019/05/samsung-galaxy-s10-png-image-715x715.jpg", description: "Slowly Loosing ideas as to what to display")
AllItem.create(item_name: "IPhone", price: 1001, image_url: "https://banner2.kisspng.com/20180601/tfq/kisspng-iphone-x-iphone-8-apple-facetime-lte-iphone-10-5b10f37ccd24b5.1472617615278375648403.jpg", description: "Here to best samsung")
AllItem.create(item_name: "Huawei", price: 1002, image_url: "https://png.pngtree.com/element_our/png/20181108/smart-phone-huawei-samsung-iphone-mobile-mockup-png_232813.jpg", description: "Here to best apple")
AllItem.create(item_name: "Google Chrome", price: 0, image_url: "https://p7.hiclipart.com/preview/540/620/853/symbol-yellow-clip-art-chrome.jpg", description: "Heard your computer had ram")
AllItem.create(item_name: "Ferrari", price: 50999, image_url: "https://png.pngtree.com/element_pic/16/05/25/00574482a2acf85.jpg", description: "Heard there was a toy car that thought he was fast")
AllItem.create(item_name: "Pencils", price: 5, image_url: "hhttps://png.pngtree.com/element_pic/17/03/14/71655bf0ff3ccd3a5c8ae495d411ae2f.jpg", description: "They write")


hk72 = User.create(username: "hk72", password:"1")
hk73 = User.create(username: "hk73", password:"2")


Cart.create(user_id: hk72.id, item_id: pepper.id  ,quantity: 1, item_name: pepper.item_name, price: pepper.price, image_url: pepper.image_url)
Cart.create(user_id: hk73.id, item_id: car.id, quantity: 1, item_name: car.item_name , price: car.price, image_url: car.image_url)

Favorite.create(user_id: hk72.id, item_id: pepper.id, item_name: pepper.item_name, price: pepper.price, image_url: pepper.image_url, description: pepper.description)
Favorite.create(user_id: hk73.id, item_id: car.id, item_name: car.item_name, price: car.price, image_url: car.image_url, description: car.description)
puts "We seeded"