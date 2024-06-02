import { useState, useEffect } from "react";
import Card from "../components/Card";
import nutritionData from "../components/Nutrition";

const Food = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [cardsPerRow, setCardsPerRow] = useState(4); // State for number of cards per row

  // Filter cards based on search term
  const filteredCards = nutritionData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to chunk the filteredCards array into arrays of given size
  function chunkArray(array, size) {
    return array.reduce((acc, _, i) => {
      if (i % size === 0) {
        acc.push(array.slice(i, i + size));
      }
      return acc;
    }, []);
  }

  // Determine number of cards per row based on window width
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setCardsPerRow(4); // Large screens (desktop)
      } else if (window.innerWidth >= 640) {
        setCardsPerRow(4); // Medium screens (tablet)
      } else {
        setCardsPerRow(1); // Small screens (mobile)
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Chunk filteredCards into arrays for responsive display
  const chunkedCards = chunkArray(filteredCards, cardsPerRow);

  return (
    <div className="min-h-screen flex flex-col items-center bg-slate-950 relative">
      {/* Opaque Navbar */}
      <div className="fixed top-0 left-0 right-0 bg-slate-950 z-10 shadow-md">
        <div className="flex justify-between items-center p-4 w-full max-w-4xl mx-auto">
          <div className="text-white text-2xl ml-4">Food Info</div> {/* Title */}
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border border-white text-white focus:outline-none px-4 py-2 rounded-lg mr-4"
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          />
        </div>
      </div>

      {/* Card List */}
      <div className="w-full flex flex-col items-center pt-24 sm:pt-32 pb-8 sm:pb-16 md:pb-24">
        {/* Full-page background with provided styles */}
        <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        <div className="absolute inset-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        <div className="text-white text-5xl text-center mb-8">Get food info here</div>
        <div className="w-full max-w-7xl mx-auto px-4">
          {chunkedCards.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center mb-8">
              {row.map((item, index) => (
                <Card key={index} title={item.name} nutrition={item.nutrition} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Food;
