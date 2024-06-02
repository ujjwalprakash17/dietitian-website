import React from "react";
import nutritionData from './Nutrition';

const Card = ({ title, nutrition }) => {
  return (
    <div className="max-w-sm m-4 inline-block rounded overflow-hidden shadow-xl bg-gray-200 text-gray-800 p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <h1 className="text-xl font-bold text-center mb-2">{title}</h1>
      {nutrition.map((item, index) => (
        <div key={index} className="flex justify-between mb-1">
          <span className="font-semibold">{item.name}:</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Card;
