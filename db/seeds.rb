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


Nils = User.create(name: 'Nils', age: 60, password: "word", email: "nils@gmail.com", background: 'Swedish')
Nils.password_digest = BCrypt::Password.create(Nils.password)
Nils.save
Nick = User.create(name: 'Nick', age: 33, password: "pass", email: "nick@gmail.com", background: 'Swedish')
Nick.password_digest = BCrypt::Password.create(Nick.password)
Nick.save
Erin = User.create(name: 'Erin', age: 30, password: "password", email:"erin@gmail.com", background: 'Swedish')
Erin.password_digest = BCrypt::Password.create(Erin.password)
Erin.save

Chicken_parm = Recipe.create(
    name: 'Chicken Parm', 
    ingredients: 'Chicken, Egg, Flour, Mozzarella Tomato Sauce Pasta, Vegetable Oil', 
    description: 'Classic Italian dish deep fried chicken baked in tomato sauce with mozarella. Dip Chicken in egg then flour, deep fry in vegetable oil until brown. Add tomato sauce to chicken in oven safe pan. Melt mozzarella over chicken in oven on broil. Cook pasta until soft. Plate pasta, then add chicken with sauce and cheese on top of pasta. Enjoy!', 
    user_id: Nils.id)

Philly = Recipe.create(
    name: 'Philly Cheese Steak', 
    ingredients: "Steak, Provolone, Hoagie, Onions, Peppers", 
    description: 'Shredded steak melted provolone sauteed onions and peppers on a hoagie. CHop up onions and peppers, sautee on stove top. Chop up steak into fine peices, sautee on stove top with onions and peppers. Add Cheese and chop it up with steak, onions, peppers.  Put it on a hoagie. Enjoy! ', 
    user_id: Nick.id) 

Buffalo_Chicken_Quesadilla = Recipe.create(
    name: 'Buffalo Chicken Quesadilla', 
    ingredients: 'Tortillas, Cheese, Buffalo Chicken Dip',
    description: "Delicious and easy late night bite.  Take two tortillas, spread buffalo chicken dip on one side, top with cheese, add second tortilla. Sautee on a skillet until cheese melts and dip is warm, also char up the tortillas a bit.  Enjoy!",
    user_id: Nils.id)

Famous_Meatloaf = Recipe.create(
    name: 'Famous Meatloaf',
    ingredients: "Ground Beef, Ketchup, Onion, Egg, Breadcrumbs, Garlic and Italian Seasoning",
    description: "Easy to please meatloaf. Break two eggs into a bowl, add ground beef, breadcrumbs, ketchup, and seasoning.  Sautee onions on stove, add to meatloaf mix.  Mix meatloaf mix with hands until blended properly. Bake at 375.  Put oven in broil mode for last 5 minutes. Enjoy!",
    user_id: Nils.id)

Chili = Recipe.create(
    name: "Homebody Chili",
ingredients: "Ground Beef, Pinto Beans, Onions, Peppers, Celery, Carrots, Diced Tomatoes, Beef Broth, Cajun Seasoning, Cheese",
description: "Perfect meal to make on a cold evening. Sautee onions, peppers, celery, and carrots. Add groung beef, cook until brown.  Add diced tomatoes. Add beans. Add beef broth. Add cajun seasoning as you please. The longer it cooks, the better it is. Enjoy! ",
user_id: Nils.id,
)

Veggie_tacos = Recipe.create(
    name: "Veggie Tacos",
ingredients: "Sweet Potato, Mushroom, Onions, Avacado, Tortillas, Taco Seasoning",
description: "A healthy option. First sautee sweet potatoes, add water or beer to steam, put on lid, this helps soften the potatoes.  Add onions and mushrooms to the sautee.  Add taco seasoning. Warm tortillas in over or stove top.  Add veggies to tortilla, top with sliced avacado. Enjoy!",
user_id: Nils.id,
)

Comment.create(description: 'Love This', recipe_id: Chicken_parm.id, user_id: Nils.id)
Comment.create(description: 'Hate This', recipe_id: Chicken_parm.id, user_id: Nick.id)
Comment.create(description: 'Thanks for the recipe!', recipe_id: Veggie_tacos.id, user_id: Erin.id)
Comment.create(description: 'So good. Going to show all my friends', recipe_id: Chili.id, user_id: Nick.id)
Comment.create(description: 'Yummy', recipe_id: Buffalo_Chicken_Quesadilla.id, user_id: Erin.id)
