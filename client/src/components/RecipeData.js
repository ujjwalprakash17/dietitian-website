const recipes = [
  {
    title: "Spaghetti Carbonara",
    method:
      "Cook pasta according to package instructions. In a pan, cook pancetta until crispy. Beat eggs and Parmesan in a bowl. Combine pasta, pancetta, and egg mixture. Serve immediately.",
    ingredients: [
      { name: "Spaghetti", quantity: "200g" },
      { name: "Pancetta", quantity: "100g" },
      { name: "Eggs", quantity: "2" },
      { name: "Parmesan Cheese", quantity: "50g" },
    ],
  },
  {
    title: "Chicken Curry",
    method:
      "Saute onions and garlic in a pan. Add chicken and cook until browned. Add curry powder and coconut milk. Simmer until chicken is cooked through. Serve with rice.",
    ingredients: [
      { name: "Chicken Breast", quantity: "500g" },
      { name: "Onion", quantity: "1" },
      { name: "Garlic", quantity: "2 cloves" },
      { name: "Curry Powder", quantity: "2 tbsp" },
      { name: "Coconut Milk", quantity: "400ml" },
    ],
  },
  {
    title: "Beef Stroganoff",
    method:
      "Cook beef in a pan until browned. Remove beef and cook onions and mushrooms. Add beef back in, along with beef broth and sour cream. Serve over egg noodles.",
    ingredients: [
      { name: "Beef Sirloin", quantity: "500g" },
      { name: "Onion", quantity: "1" },
      { name: "Mushrooms", quantity: "200g" },
      { name: "Beef Broth", quantity: "1 cup" },
      { name: "Sour Cream", quantity: "1 cup" },
    ],
  },
  {
    title: "Vegetable Stir Fry",
    method:
      "Cook vegetables in a wok with oil until tender. Add soy sauce and stir. Serve with rice or noodles.",
    ingredients: [
      { name: "Broccoli", quantity: "1 cup" },
      { name: "Carrot", quantity: "1" },
      { name: "Bell Pepper", quantity: "1" },
      { name: "Soy Sauce", quantity: "2 tbsp" },
      { name: "Olive Oil", quantity: "2 tbsp" },
    ],
  },
  {
    title: "Tacos",
    method:
      "Cook ground beef in a pan. Add taco seasoning. Serve in taco shells with lettuce, cheese, and salsa.",
    ingredients: [
      { name: "Ground Beef", quantity: "500g" },
      { name: "Taco Seasoning", quantity: "1 packet" },
      { name: "Lettuce", quantity: "1 cup" },
      { name: "Cheese", quantity: "1 cup" },
      { name: "Salsa", quantity: "1 cup" },
    ],
  },
  {
    title: "Pancakes",
    method:
      "Mix flour, milk, eggs, and baking powder in a bowl. Cook on a griddle until golden brown. Serve with syrup.",
    ingredients: [
      { name: "Flour", quantity: "1 cup" },
      { name: "Milk", quantity: "1 cup" },
      { name: "Eggs", quantity: "2" },
      { name: "Baking Powder", quantity: "1 tbsp" },
      { name: "Syrup", quantity: "to serve" },
    ],
  },
  {
    title: "Caesar Salad",
    method:
      "Mix lettuce, croutons, Parmesan, and Caesar dressing in a bowl. Top with grilled chicken if desired.",
    ingredients: [
      { name: "Lettuce", quantity: "1 head" },
      { name: "Croutons", quantity: "1 cup" },
      { name: "Parmesan Cheese", quantity: "1/2 cup" },
      { name: "Caesar Dressing", quantity: "1/2 cup" },
      { name: "Chicken Breast", quantity: "1 (optional)" },
    ],
  },
  {
    title: "French Toast",
    method:
      "Mix eggs, milk, and cinnamon in a bowl. Dip bread in mixture and cook on a griddle until golden brown. Serve with syrup.",
    ingredients: [
      { name: "Bread", quantity: "4 slices" },
      { name: "Eggs", quantity: "2" },
      { name: "Milk", quantity: "1/2 cup" },
      { name: "Cinnamon", quantity: "1 tsp" },
      { name: "Syrup", quantity: "to serve" },
    ],
  },
  {
    title: "Grilled Cheese Sandwich",
    method:
      "Butter bread and place cheese between slices. Cook on a griddle until bread is golden brown and cheese is melted.",
    ingredients: [
      { name: "Bread", quantity: "2 slices" },
      { name: "Cheese", quantity: "2 slices" },
      { name: "Butter", quantity: "2 tbsp" },
    ],
  },
  {
    title: "Chocolate Chip Cookies",
    method:
      "Mix flour, sugar, butter, eggs, and chocolate chips in a bowl. Drop spoonfuls onto a baking sheet and bake at 350°F for 10-12 minutes.",
    ingredients: [
      { name: "Flour", quantity: "2 cups" },
      { name: "Sugar", quantity: "1 cup" },
      { name: "Butter", quantity: "1 cup" },
      { name: "Eggs", quantity: "2" },
      { name: "Chocolate Chips", quantity: "1 cup" },
    ],
  },
  {
    title: "Baked Salmon",
    method:
      "Preheat oven to 375°F. Place salmon on a baking sheet, season with salt and pepper, and bake for 15-20 minutes. Serve with lemon wedges.",
    ingredients: [
      { name: "Salmon Fillets", quantity: "4" },
      { name: "Salt", quantity: "to taste" },
      { name: "Pepper", quantity: "to taste" },
      { name: "Lemon", quantity: "1" },
    ],
  },
  {
    title: "Minestrone Soup",
    method:
      "Saute onions, garlic, and carrots in a pot. Add tomatoes, beans, pasta, and broth. Simmer until vegetables and pasta are tender. Serve hot.",
    ingredients: [
      { name: "Onion", quantity: "1" },
      { name: "Garlic", quantity: "2 cloves" },
      { name: "Carrots", quantity: "2" },
      { name: "Diced Tomatoes", quantity: "1 can" },
      { name: "Kidney Beans", quantity: "1 can" },
      { name: "Pasta", quantity: "1 cup" },
      { name: "Vegetable Broth", quantity: "4 cups" },
    ],
  },
  {
    title: "Quiche Lorraine",
    method:
      "Preheat oven to 375°F. Cook bacon and onions. Combine eggs, cream, and cheese in a bowl. Add bacon and onions to a pie crust, pour in egg mixture, and bake for 35-40 minutes.",
    ingredients: [
      { name: "Pie Crust", quantity: "1" },
      { name: "Bacon", quantity: "100g" },
      { name: "Onion", quantity: "1" },
      { name: "Eggs", quantity: "3" },
      { name: "Heavy Cream", quantity: "1 cup" },
      { name: "Gruyere Cheese", quantity: "1 cup" },
    ],
  },
  {
    title: "Shrimp Scampi",
    method:
      "Cook pasta according to package instructions. Saute garlic and shrimp in butter until shrimp are pink. Add lemon juice and parsley, then combine with pasta. Serve hot.",
    ingredients: [
      { name: "Spaghetti", quantity: "200g" },
      { name: "Shrimp", quantity: "500g" },
      { name: "Garlic", quantity: "4 cloves" },
      { name: "Butter", quantity: "1/4 cup" },
      { name: "Lemon Juice", quantity: "2 tbsp" },
      { name: "Parsley", quantity: "2 tbsp" },
    ],
  },
  {
    title: "Mango Smoothie",
    method:
      "Blend mango, yogurt, milk, and honey until smooth. Serve immediately.",
    ingredients: [
      { name: "Mango", quantity: "1" },
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Milk", quantity: "1/2 cup" },
      { name: "Honey", quantity: "1 tbsp" },
    ],
  },
  {
    title: "Chicken Fajitas",
    method:
      "Cook chicken, bell peppers, and onions in a pan with fajita seasoning. Serve with tortillas and your favorite toppings.",
    ingredients: [
      { name: "Chicken Breast", quantity: "500g" },
      { name: "Bell Peppers", quantity: "2" },
      { name: "Onion", quantity: "1" },
      { name: "Fajita Seasoning", quantity: "1 packet" },
      { name: "Tortillas", quantity: "8" },
    ],
  },
  {
    title: "Beef Tacos",
    method:
      "Cook ground beef in a pan. Add taco seasoning. Serve in taco shells with lettuce, cheese, and salsa.",
    ingredients: [
      { name: "Ground Beef", quantity: "500g" },
      { name: "Taco Seasoning", quantity: "1 packet" },
      { name: "Lettuce", quantity: "1 cup" },
      { name: "Cheese", quantity: "1 cup" },
      { name: "Salsa", quantity: "1 cup" },
    ],
  },
  {
    title: "Stuffed Bell Peppers",
    method:
      "Preheat oven to 375°F. Cut tops off bell peppers and remove seeds. Mix cooked rice, ground beef, tomatoes, and cheese. Stuff peppers with mixture and bake for 30 minutes.",
    ingredients: [
      { name: "Bell Peppers", quantity: "4" },
      { name: "Cooked Rice", quantity: "2 cups" },
      { name: "Ground Beef", quantity: "500g" },
      { name: "Diced Tomatoes", quantity: "1 can" },
      { name: "Cheese", quantity: "1 cup" },
    ],
  },
  {
    title: "Chicken Alfredo",
    method:
      "Cook pasta according to package instructions. Saute chicken in a pan. Add heavy cream and Parmesan, then combine with pasta. Serve hot.",
    ingredients: [
      { name: "Fettuccine", quantity: "200g" },
      { name: "Chicken Breast", quantity: "500g" },
      { name: "Heavy Cream", quantity: "1 cup" },
      { name: "Parmesan Cheese", quantity: "1 cup" },
    ],
  },
  {
    title: "Lemon Bars",
    method:
      "Preheat oven to 350°F. Mix crust ingredients and press into a baking dish. Bake for 15 minutes. Mix filling ingredients and pour over crust. Bake for another 20 minutes. Let cool before serving.",
    ingredients: [
      { name: "Flour", quantity: "2 cups" },
      { name: "Butter", quantity: "1 cup" },
      { name: "Sugar", quantity: "1 cup" },
      { name: "Lemon Juice", quantity: "1 cup" },
      { name: "Eggs", quantity: "4" },
    ],
  },
  {
    title: "Tomato Basil Soup",
    method:
      "Saute onions and garlic in a pot. Add tomatoes, broth, and basil. Simmer for 30 minutes. Blend until smooth. Serve hot.",
    ingredients: [
      { name: "Onion", quantity: "1" },
      { name: "Garlic", quantity: "2 cloves" },
      { name: "Diced Tomatoes", quantity: "2 cans" },
      { name: "Vegetable Broth", quantity: "4 cups" },
      { name: "Basil", quantity: "1/4 cup" },
    ],
  },
  {
    title: "Chocolate Cake",
    method:
      "Preheat oven to 350°F. Mix flour, cocoa powder, sugar, eggs, and milk. Pour into a baking dish and bake for 30-35 minutes. Let cool before serving.",
    ingredients: [
      { name: "Flour", quantity: "2 cups" },
      { name: "Cocoa Powder", quantity: "1/2 cup" },
      { name: "Sugar", quantity: "1 cup" },
      { name: "Eggs", quantity: "3" },
      { name: "Milk", quantity: "1 cup" },
    ],
  },
  {
    title: "Greek Salad",
    method:
      "Combine chopped cucumbers, tomatoes, olives, and feta in a bowl. Dress with olive oil and lemon juice. Serve chilled.",
    ingredients: [
      { name: "Cucumber", quantity: "1" },
      { name: "Tomatoes", quantity: "2" },
      { name: "Olives", quantity: "1/2 cup" },
      { name: "Feta Cheese", quantity: "1/2 cup" },
      { name: "Olive Oil", quantity: "2 tbsp" },
      { name: "Lemon Juice", quantity: "1 tbsp" },
    ],
  },
  {
    title: "Garlic Bread",
    method:
      "Preheat oven to 375°F. Mix butter, garlic, and parsley. Spread on bread and bake for 10 minutes. Serve hot.",
    ingredients: [
      { name: "Bread", quantity: "1 loaf" },
      { name: "Butter", quantity: "1/2 cup" },
      { name: "Garlic", quantity: "3 cloves" },
      { name: "Parsley", quantity: "2 tbsp" },
    ],
  },
  {
    title: "BBQ Chicken",
    method:
      "Marinate chicken in BBQ sauce for 1 hour. Grill until cooked through. Serve with additional BBQ sauce.",
    ingredients: [
      { name: "Chicken Breast", quantity: "4" },
      { name: "BBQ Sauce", quantity: "1 cup" },
    ],
  },
  {
    title: "Fruit Salad",
    method:
      "Combine chopped fruits in a bowl. Drizzle with honey and lemon juice. Serve chilled.",
    ingredients: [
      { name: "Strawberries", quantity: "1 cup" },
      { name: "Blueberries", quantity: "1 cup" },
      { name: "Kiwi", quantity: "2" },
      { name: "Banana", quantity: "1" },
      { name: "Honey", quantity: "2 tbsp" },
      { name: "Lemon Juice", quantity: "1 tbsp" },
    ],
  },
  {
    title: "Lasagna",
    method:
      "Preheat oven to 375°F. Layer cooked noodles, ricotta, meat sauce, and mozzarella in a baking dish. Bake for 45 minutes. Let cool before serving.",
    ingredients: [
      { name: "Lasagna Noodles", quantity: "12" },
      { name: "Ricotta Cheese", quantity: "2 cups" },
      { name: "Ground Beef", quantity: "500g" },
      { name: "Marinara Sauce", quantity: "2 cups" },
      { name: "Mozzarella Cheese", quantity: "2 cups" },
    ],
  },
  {
    title: "Clam Chowder",
    method:
      "Saute onions and celery in a pot. Add potatoes, clams, broth, and cream. Simmer until potatoes are tender. Serve hot.",
    ingredients: [
      { name: "Onion", quantity: "1" },
      { name: "Celery", quantity: "2 stalks" },
      { name: "Potatoes", quantity: "3" },
      { name: "Clams", quantity: "2 cans" },
      { name: "Chicken Broth", quantity: "2 cups" },
      { name: "Heavy Cream", quantity: "1 cup" },
    ],
  },
  {
    title: "Egg Salad Sandwich",
    method:
      "Mix chopped hard-boiled eggs with mayonnaise, mustard, and relish. Spread on bread and serve.",
    ingredients: [
      { name: "Eggs", quantity: "4" },
      { name: "Mayonnaise", quantity: "1/4 cup" },
      { name: "Mustard", quantity: "1 tbsp" },
      { name: "Relish", quantity: "1 tbsp" },
      { name: "Bread", quantity: "4 slices" },
    ],
  },
  {
    title: "Teriyaki Chicken",
    method:
      "Marinate chicken in teriyaki sauce for 30 minutes. Cook in a pan until done. Serve with rice and vegetables.",
    ingredients: [
      { name: "Chicken Breast", quantity: "500g" },
      { name: "Teriyaki Sauce", quantity: "1/2 cup" },
      { name: "Rice", quantity: "2 cups" },
      { name: "Mixed Vegetables", quantity: "2 cups" },
    ],
  },
  {
    title: "Omelette",
    method:
      "Beat eggs and pour into a hot pan. Add cheese and vegetables, then fold and cook until set. Serve hot.",
    ingredients: [
      { name: "Eggs", quantity: "3" },
      { name: "Cheese", quantity: "1/2 cup" },
      { name: "Bell Pepper", quantity: "1" },
      { name: "Onion", quantity: "1/2" },
      { name: "Butter", quantity: "1 tbsp" },
    ],
  },
  {
    title: "Burritos",
    method:
      "Cook ground beef and beans in a pan. Fill tortillas with meat mixture, cheese, and salsa. Roll up and serve.",
    ingredients: [
      { name: "Ground Beef", quantity: "500g" },
      { name: "Refried Beans", quantity: "1 can" },
      { name: "Tortillas", quantity: "8" },
      { name: "Cheese", quantity: "1 cup" },
      { name: "Salsa", quantity: "1 cup" },
    ],
  },
  {
    title: "Apple Pie",
    method:
      "Preheat oven to 375°F. Mix sliced apples with sugar and cinnamon. Place in a pie crust and top with another crust. Bake for 45-50 minutes. Let cool before serving.",
    ingredients: [
      { name: "Apples", quantity: "6" },
      { name: "Sugar", quantity: "1 cup" },
      { name: "Cinnamon", quantity: "1 tsp" },
      { name: "Pie Crust", quantity: "2" },
    ],
  },
  {
    title: "Cauliflower Rice",
    method:
      "Pulse cauliflower in a food processor until it resembles rice. Cook in a pan with oil for 5-7 minutes. Serve hot.",
    ingredients: [
      { name: "Cauliflower", quantity: "1 head" },
      { name: "Olive Oil", quantity: "2 tbsp" },
    ],
  },
  {
    title: "Fish Tacos",
    method:
      "Cook fish in a pan. Fill tortillas with fish, cabbage, and a squeeze of lime. Serve with salsa.",
    ingredients: [
      { name: "Fish Fillets", quantity: "500g" },
      { name: "Tortillas", quantity: "8" },
      { name: "Cabbage", quantity: "1 cup" },
      { name: "Lime", quantity: "1" },
      { name: "Salsa", quantity: "1 cup" },
    ],
  },
  {
    title: "Beef Stew",
    method:
      "Brown beef in a pot. Add onions, carrots, potatoes, and broth. Simmer until meat and vegetables are tender. Serve hot.",
    ingredients: [
      { name: "Beef Stew Meat", quantity: "500g" },
      { name: "Onion", quantity: "1" },
      { name: "Carrots", quantity: "2" },
      { name: "Potatoes", quantity: "3" },
      { name: "Beef Broth", quantity: "4 cups" },
    ],
  },
  {
    title: "Falafel",
    method:
      "Blend chickpeas, garlic, parsley, and spices. Form into balls and fry until golden brown. Serve with pita and tzatziki.",
    ingredients: [
      { name: "Chickpeas", quantity: "2 cups" },
      { name: "Garlic", quantity: "3 cloves" },
      { name: "Parsley", quantity: "1/4 cup" },
      { name: "Cumin", quantity: "1 tsp" },
      { name: "Coriander", quantity: "1 tsp" },
      { name: "Pita Bread", quantity: "4" },
      { name: "Tzatziki", quantity: "1 cup" },
    ],
  },
  {
    title: "Chicken Parmesan",
    method:
      "Bread and fry chicken cutlets. Top with marinara sauce and mozzarella, then bake until cheese is melted. Serve with pasta.",
    ingredients: [
      { name: "Chicken Breast", quantity: "4" },
      { name: "Breadcrumbs", quantity: "1 cup" },
      { name: "Marinara Sauce", quantity: "2 cups" },
      { name: "Mozzarella Cheese", quantity: "1 cup" },
      { name: "Spaghetti", quantity: "200g" },
    ],
  },
  {
    title: "Banana Bread",
    method:
      "Preheat oven to 350°F. Mix flour, sugar, butter, eggs, and mashed bananas. Pour into a loaf pan and bake for 60 minutes. Let cool before serving.",
    ingredients: [
      { name: "Flour", quantity: "2 cups" },
      { name: "Sugar", quantity: "1 cup" },
      { name: "Butter", quantity: "1/2 cup" },
      { name: "Eggs", quantity: "2" },
      { name: "Bananas", quantity: "3" },
    ],
  },
  {
    title: "Pumpkin Soup",
    method:
      "Saute onions and garlic in a pot. Add pumpkin puree, broth, and spices. Simmer for 20 minutes. Blend until smooth and serve hot.",
    ingredients: [
      { name: "Onion", quantity: "1" },
      { name: "Garlic", quantity: "2 cloves" },
      { name: "Pumpkin Puree", quantity: "2 cups" },
      { name: "Chicken Broth", quantity: "4 cups" },
      { name: "Nutmeg", quantity: "1/2 tsp" },
    ],
  },
  {
    title: "Mac and Cheese",
    method:
      "Cook pasta according to package instructions. Make a cheese sauce with butter, flour, milk, and cheddar. Combine with pasta and serve hot.",
    ingredients: [
      { name: "Elbow Pasta", quantity: "200g" },
      { name: "Butter", quantity: "1/4 cup" },
      { name: "Flour", quantity: "2 tbsp" },
      { name: "Milk", quantity: "2 cups" },
      { name: "Cheddar Cheese", quantity: "2 cups" },
    ],
  }
];

export default recipes;
