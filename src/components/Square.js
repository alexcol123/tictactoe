import React from 'react';

const Square = ({ value, onClick, isWinnigSquare }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${isWinnigSquare ? 'winning' : ''}${
        value === 'X' ? 'text-green' : 'text-orange'
      } `}
      style={{ fontWeight: isWinnigSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
