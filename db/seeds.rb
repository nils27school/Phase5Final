# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Destroying seeds...'

Comment.destroy_all
Recipe.destroy_all
User.destroy_all


Nils = User.create(name: 'Nils', age: 60, password_digest: "word", email: "nils@gmail.com", background: 'Swedish')
Nick = User.create(name: 'Nick', age: 33, password_digest: "pass", email: "nick@gmail.com", background: 'Swedish')
Erin = User.create(name: 'Erin', age: 30, password_digest: "password", email:"erin@gmail.com", background: 'Swedish')


Chicken_parm = Recipe.create(
    name: 'Chicken Parm', 
    ingredients: 'Chicken Mozzaerlla Tomato Sauce Pasta', 
    description: 'Classic Italian dish deep fried chicken baked in tomato sauce with mozarella', 
    user_id: Nils.id)

Philly = Recipe.create(
    name: 'Philly Cheese Steak', 
    ingredients: "Steak Provolone Hoagie Onions Peppers", 
    description: 'Shredded steak melted provolone sauteed onions and peppers on a hoagie', 
    user_id: Nick.id) 

Comment.create(description: 'Love This', recipe_id: Chicken_parm.id, user_id: Nils.id)
Comment.create(description: 'Hate This', recipe_id: Chicken_parm.id, user_id: Nils.id)
