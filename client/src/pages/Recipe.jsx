import React from "react";
import recipes from "../components/RecipeData";
import RecipeCard from "../components/RecipeCard";

const Recipe = () => {
  return (
    <div className="relative min-h-screen">
      <div className="flex justify-between items-center p-5 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.5),rgba(255,255,255,0))] text-white shadow-md">
        <h1 className="text-2xl font-bold px-10">Recipe</h1>
      </div>
      <div className="flex flex-wrap justify-center px-20 py-10">
        {/* Background for website */}
        <div className="absolute top-0 left-0 z-[-2] w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        {recipes.map((item, index) => (
          <RecipeCard key={item.id || index} recipe={item} />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
