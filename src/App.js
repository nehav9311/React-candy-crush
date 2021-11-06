import "./styles.css";
import { React, useEffect, useState } from "react";

const width = 8;
const Candycolors = ["blue", "red", "purple", "green", "yellow", "orange"];

const App = () => {
  //Problem 1 sol
  const [currentColorArrangement, setcurrentColorArrangement] = useState([]);

  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        Candycolors[Math.floor(Math.random() * Candycolors.length)];
      randomColorArrangement.push(randomColor);
    }
    //console.log(randomColorArrangement)
    setcurrentColorArrangement(randomColorArrangement);
  };
  //Problem 2 sol
  useEffect(() => {
    createBoard();
  }, []);

  console.log(currentColorArrangement);

  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((color, index) => (
          <img
            key={index}
            style={{ backgroundColor: color }}
            alt="Board color"
          />
        ))}
      </div>
    </div>
  );
};

export default App;
