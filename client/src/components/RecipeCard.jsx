import React, { useState } from 'react';

const RecipeCard = ({ recipe }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white relative" style={{ width: '200px', height: '200px' }}>
      {/* Default Card */}
      <div className={`recipe-book ${modalOpen ? 'hidden' : 'flex flex-col items-center justify-center h-full'}`}>
        <div className="text-center">
          <div className="font-bold text-2xl mb-2">{recipe.title}</div>
          <button onClick={toggleModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            View Recipe
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="recipe-modal fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 relative">
            <button onClick={toggleModal} className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded-full">
              X
            </button>
            <h2 className="font-bold text-2xl mb-2">{recipe.title}</h2>
            <p className="text-gray-700 mb-4">{recipe.method}</p>
            <ul className="text-xl">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.name} - {ingredient.quantity}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
