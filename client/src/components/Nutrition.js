const nutritionData = [
  {
    name: "Rice",
    nutrition: [
      { name: "Protein (g)", value: "2.7" },
      { name: "Carbohydrates (g)", value: "28" },
      { name: "Fat (g)", value: "0.3" },
      { name: "Fiber (g)", value: "0.4" },
      { name: "Calories", value: "130" },
    ],
  },
  {
    name: "Chicken Breast",
    nutrition: [
      { name: "Protein (g)", value: "31" },
      { name: "Carbohydrates (g)", value: "0" },
      { name: "Fat (g)", value: "3.6" },
      { name: "Fiber (g)", value: "0" },
      { name: "Calories", value: "165" },
    ],
  },
  {
    name: "Apple",
    nutrition: [
      { name: "Protein (g)", value: "0.3" },
      { name: "Carbohydrates (g)", value: "14" },
      { name: "Fat (g)", value: "0.2" },
      { name: "Fiber (g)", value: "2.4" },
      { name: "Calories", value: "52" },
    ],
  },
  {
    name: "Broccoli",
    nutrition: [
      { name: "Protein (g)", value: "2.8" },
      { name: "Carbohydrates (g)", value: "6.6" },
      { name: "Fat (g)", value: "0.3" },
      { name: "Fiber (g)", value: "2.6" },
      { name: "Calories", value: "55" },
    ],
  },
  {
    name: "Almonds",
    nutrition: [
      { name: "Protein (g)", value: "21.2" },
      { name: "Carbohydrates (g)", value: "21.7" },
      { name: "Fat (g)", value: "49.9" },
      { name: "Fiber (g)", value: "12.5" },
      { name: "Calories", value: "575" },
    ],
  },
  {
    name: "Salmon",
    nutrition: [
      { name: "Protein (g)", value: "20" },
      { name: "Carbohydrates (g)", value: "0" },
      { name: "Fat (g)", value: "13" },
      { name: "Fiber (g)", value: "0" },
      { name: "Calories", value: "206" },
    ],
  },
  {
    name: "Banana",
    nutrition: [
      { name: "Protein (g)", value: "1.3" },
      { name: "Carbohydrates (g)", value: "27" },
      { name: "Fat (g)", value: "0.3" },
      { name: "Fiber (g)", value: "3.1" },
      { name: "Calories", value: "105" },
    ],
  },
  {
    name: "Eggs",
    nutrition: [
      { name: "Protein (g)", value: "13" },
      { name: "Carbohydrates (g)", value: "1.1" },
      { name: "Fat (g)", value: "11" },
      { name: "Fiber (g)", value: "0" },
      { name: "Calories", value: "155" },
    ],
  },
  {
    name: "Spinach",
    nutrition: [
      { name: "Protein (g)", value: "2.9" },
      { name: "Carbohydrates (g)", value: "3.6" },
      { name: "Fat (g)", value: "0.4" },
      { name: "Fiber (g)", value: "2.2" },
      { name: "Calories", value: "23" },
    ],
  },
  {
    name: "Yogurt",
    nutrition: [
      { name: "Protein (g)", value: "10" },
      { name: "Carbohydrates (g)", value: "3.6" },
      { name: "Fat (g)", value: "5" },
      { name: "Fiber (g)", value: "0" },
      { name: "Calories", value: "61" },
    ],
  },
  {
    name: "Beef",
    nutrition: [
      { name: "Protein (g)", value: "26" },
      { name: "Carbohydrates (g)", value: "0" },
      { name: "Fat (g)", value: "15" },
      { name: "Fiber (g)", value: "0" },
      { name: "Calories", value: "250" },
    ],
  },
  {
    name: "Quinoa",
    nutrition: [
      { name: "Protein (g)", value: "4.1" },
      { name: "Carbohydrates (g)", value: "21.3" },
      { name: "Fat (g)", value: "1.9" },
      { name: "Fiber (g)", value: "2.8" },
      { name: "Calories", value: "120" },
    ],
  },
  {
    name: "Tofu",
    nutrition: [
      { name: "Protein (g)", value: "8" },
      { name: "Carbohydrates (g)", value: "2" },
      { name: "Fat (g)", value: "4.8" },
      { name: "Fiber (g)", value: "0.5" },
      { name: "Calories", value: "76" },
    ],
  },
  {
    name: "Sweet Potato",
    nutrition: [
      { name: "Protein (g)", value: "2" },
      { name: "Carbohydrates (g)", value: "20" },
      { name: "Fat (g)", value: "0.1" },
      { name: "Fiber (g)", value: "3" },
      { name: "Calories", value: "86" },
    ],
  },
  {
    name: "Peanut Butter",
    nutrition: [
      { name: "Protein (g)", value: "25" },
      { name: "Carbohydrates (g)", value: "20" },
      { name: "Fat (g)", value: "50" },
      { name: "Fiber (g)", value: "6" },
      { name: "Calories", value: "588" },
    ],
  },
  {
    name: "Oatmeal",
    nutrition: [
      { name: "Protein (g)", value: "2.4" },
      { name: "Carbohydrates (g)", value: "12" },
      { name: "Fat (g)", value: "1.4" },
      { name: "Fiber (g)", value: "1.7" },
      { name: "Calories", value: "68" },
    ],
  },
  {
    name: "Avocado",
    nutrition: [
      { name: "Protein (g)", value: "2" },
      { name: "Carbohydrates (g)", value: "9" },
      { name: "Fat (g)", value: "15" },
      { name: "Fiber (g)", value: "7" },
      { name: "Calories", value: "160" },
    ],
  },
  {
    name: "Cottage Cheese",
    nutrition: [
      { name: "Protein (g)", value: "11" },
      { name: "Carbohydrates (g)", value: "3.4" },
      { name: "Fat (g)", value: "4.3" },
      { name: "Fiber (g)", value: "0" },
      { name: "Calories", value: "98" },
    ],
  },
  {
    name: "Orange",
    nutrition: [
      { name: "Protein (g)", value: "1.2" },
      { name: "Carbohydrates (g)", value: "12" },
      { name: "Fat (g)", value: "0.2" },
      { name: "Fiber (g)", value: "2.4" },
      { name: "Calories", value: "62" },
    ],
  },
  {
    name: "Blueberries",
    nutrition: [
      { name: "Protein (g)", value: "0.7" },
      { name: "Carbohydrates (g)", value: "14" },
      { name: "Fat (g)", value: "0.3" },
      { name: "Fiber (g)", value: "2.4" },
      { name: "Calories", value: "57" },
    ],
  },
  {
    name: "Cheese",
    nutrition: [
      { name: "Protein (g)", value: "25" },
      { name: "Carbohydrates (g)", value: "1.3" },
      { name: "Fat (g)", value: "33" },
      { name: "Fiber (g)", value: "0" },
      { name: "Calories", value: "402" },
    ],
  },
  {
    name: "Lentils",
    nutrition: [
      { name: "Protein (g)", value: "9" },
      { name: "Carbohydrates (g)", value: "20" },
      { name: "Fat (g)", value: "0.4" },
      { name: "Fiber (g)", value: "7.9" },
      { name: "Calories", value: "116" },
    ],
  },
  {
    name: "Pork Chop",
    nutrition: [
      { name: "Protein (g)", value: "23" },
      { name: "Carbohydrates (g)", value: "0" },
      { name: "Fat (g)", value: "13" },
      { name: "Fiber (g)", value: "0" },
      { name: "Calories", value: "250" },
    ],
  },
  {
    name: "Brown Rice",
    nutrition: [
      { name: "Protein (g)", value: "2.6" },
      { name: "Carbohydrates (g)", value: "23" },
      { name: "Fat (g)", value: "0.9" },
      { name: "Fiber (g)", value: "1.8" },
      { name: "Calories", value: "111" },
    ],
  },
  {
    name: "Mango",
    nutrition: [
      { name: "Protein (g)", value: "0.8" },
      { name: "Carbohydrates (g)", value: "15" },
      { name: "Fat (g)", value: "0.2" },
      { name: "Fiber (g)", value: "1.6" },
      { name: "Calories", value: "60" },
    ],
  },
  {
    name: "Walnuts",
    nutrition: [
      { name: "Protein (g)", value: "15.2" },
      { name: "Carbohydrates (g)", value: "13.7" },
      { name: "Fat (g)", value: "65.2" },
      { name: "Fiber (g)", value: "6.7" },
      { name: "Calories", value: "654" },
    ],
  },
  {
    name: "Chia Seeds",
    nutrition: [
      { name: "Protein (g)", value: "16.5" },
      { name: "Carbohydrates (g)", value: "42.1" },
      { name: "Fat (g)", value: "30.7" },
      { name: "Fiber (g)", value: "34.4" },
      { name: "Calories", value: "486" },
    ],
  },
  {
    name: "Pumpkin",
    nutrition: [
      { name: "Protein (g)", value: "1.0" },
      { name: "Carbohydrates (g)", value: "7.5" },
      { name: "Fat (g)", value: "0.1" },
      { name: "Fiber (g)", value: "0.5" },
      { name: "Calories", value: "26" },
    ],
  },
  {
    name: "Grapes",
    nutrition: [
      { name: "Protein (g)", value: "0.6" },
      { name: "Carbohydrates (g)", value: "17" },
      { name: "Fat (g)", value: "0.2" },
      { name: "Fiber (g)", value: "0.9" },
      { name: "Calories", value: "69" },
    ],
  },
  {
    name: "Kale",
    nutrition: [
      { name: "Protein (g)", value: "2.9" },
      { name: "Carbohydrates (g)", value: "6.3" },
      { name: "Fat (g)", value: "0.6" },
      { name: "Fiber (g)", value: "2" },
      { name: "Calories", value: "33" },
    ],
  },
  {
    name: "Shrimp",
    nutrition: [
      { name: "Protein (g)", value: "24" },
      { name: "Carbohydrates (g)", value: "0.2" },
      { name: "Fat (g)", value: "0.3" },
      { name: "Fiber (g)", value: "0" },
      { name: "Calories", value: "99" },
    ],
  },
  {
    name: "Pineapple",
    nutrition: [
      { name: "Protein (g)", value: "0.5" },
      { name: "Carbohydrates (g)", value: "13" },
      { name: "Fat (g)", value: "0.1" },
      { name: "Fiber (g)", value: "1.4" },
      { name: "Calories", value: "50" },
    ],
  },
  {
    name: "Turkey",
    nutrition: [
      { name: "Protein (g)", value: "29" },
      { name: "Carbohydrates (g)", value: "0" },
      { name: "Fat (g)", value: "3.4" },
      { name: "Fiber (g)", value: "0" },
      { name: "Calories", value: "135" },
    ],
  },
  {
    name: "Peas",
    nutrition: [
      { name: "Protein (g)", value: "5" },
      { name: "Carbohydrates (g)", value: "14" },
      { name: "Fat (g)", value: "0.4" },
      { name: "Fiber (g)", value: "5" },
      { name: "Calories", value: "81" },
    ],
  },
  {
    name: "Tomato",
    nutrition: [
      { name: "Protein (g)", value: "0.9" },
      { name: "Carbohydrates (g)", value: "3.9" },
      { name: "Fat (g)", value: "0.2" },
      { name: "Fiber (g)", value: "1.2" },
      { name: "Calories", value: "18" },
    ],
  },
  {
    name: "Zucchini",
    nutrition: [
      { name: "Protein (g)", value: "1.2" },
      { name: "Carbohydrates (g)", value: "3.1" },
      { name: "Fat (g)", value: "0.3" },
      { name: "Fiber (g)", value: "1" },
      { name: "Calories", value: "17" },
    ],
  },
  {
    name: "Radish",
    nutrition: [
      { name: "Protein (g)", value: "0.7" },
      { name: "Carbohydrates (g)", value: "3.4" },
      { name: "Fat (g)", value: "0.1" },
      { name: "Fiber (g)", value: "1.6" },
      { name: "Calories", value: "16" },
    ],
  },
  {
    name: "Carrot",
    nutrition: [
      { name: "Protein (g)", value: "0.9" },
      { name: "Carbohydrates (g)", value: "9.6" },
      { name: "Fat (g)", value: "0.2" },
      { name: "Fiber (g)", value: "2.8" },
      { name: "Calories", value: "41" },
    ],
  },
  {
    name: "Cauliflower",
    nutrition: [
      { name: "Protein (g)", value: "1.9" },
      { name: "Carbohydrates (g)", value: "4.9" },
      { name: "Fat (g)", value: "0.3" },
      { name: "Fiber (g)", value: "2" },
      { name: "Calories", value: "25" },
    ],
  },
  {
    name: "Pomegranate",
    nutrition: [
      { name: "Protein (g)", value: "1.7" },
      { name: "Carbohydrates (g)", value: "18.7" },
      { name: "Fat (g)", value: "1.2" },
      { name: "Fiber (g)", value: "4" },
      { name: "Calories", value: "83" },
    ],
  },
  {
    name: "Green Beans",
    nutrition: [
      { name: "Protein (g)", value: "1.8" },
      { name: "Carbohydrates (g)", value: "7" },
      { name: "Fat (g)", value: "0.1" },
      { name: "Fiber (g)", value: "3.4" },
      { name: "Calories", value: "31" },
    ],
  },
  {
    name: "Bell Pepper",
    nutrition: [
      { name: "Protein (g)", value: "1" },
      { name: "Carbohydrates (g)", value: "6" },
      { name: "Fat (g)", value: "0.2" },
      { name: "Fiber (g)", value: "2.1" },
      { name: "Calories", value: "25" },
    ],
  },
  {
    name: "Chickpeas",
    nutrition: [
      { name: "Protein (g)", value: "19" },
      { name: "Carbohydrates (g)", value: "61" },
      { name: "Fat (g)", value: "6" },
      { name: "Fiber (g)", value: "17" },
      { name: "Calories", value: "364" },
    ],
  },
  {
    name: "Cucumber",
    nutrition: [
      { name: "Protein (g)", value: "0.7" },
      { name: "Carbohydrates (g)", value: "3.6" },
      { name: "Fat (g)", value: "0.1" },
      { name: "Fiber (g)", value: "0.5" },
      { name: "Calories", value: "16" },
    ],
  }
];

export default nutritionData;