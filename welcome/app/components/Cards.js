import React from 'react';

function Cards({ image, title, subtitle }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg pt-2 bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-2">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-gray-700 text-base">{subtitle}</p>
      </div>
    </div>
  );
}

export default Cards;
