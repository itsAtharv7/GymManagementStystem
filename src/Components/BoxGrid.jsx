import React from "react";
import "../Styles/Efficiency.css"

const BoxGrid = ({ filledBoxes,totalBoxes }) => {
  
  const boxes = Array.from({ length: totalBoxes }, (_, i) => i + 1); 

  return (
    <div className="box-grid">
      {boxes.map((box, index) => (
        <div
          key={index}
          className={`box ${index < filledBoxes ? "filled" : ""}`}
        ></div>
      ))}
    </div>
  );
};

export default BoxGrid;
