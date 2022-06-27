import React from "react";

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{
        fontWeight: isWinningSquare ? "bold" : "normal",
        color: isWinningSquare ? "dodgerblue" : "white",
        textDecoration: isWinningSquare ? "line-through" : "none",
      }}
    >
      {value}
    </button>
  );
};

export default Square;
