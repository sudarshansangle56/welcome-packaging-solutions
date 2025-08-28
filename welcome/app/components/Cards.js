import React from 'react';

function Cards({ image, title, subtitle }) {
  return (
    <div className="max-w-sm h-[500px] rounded overflow-hidden shadow-lg pt-2 p-4 bg-[#444646a5]">
      <img
        src={image}
        alt={title}
        className="w-full h-[450px] object-cover "
      />
      <div className="p-2">
        <h5 className="text-xl font-semibold mb-2 text-white">{title}</h5>
        <h1>⭐⭐⭐</h1>
        <p className="text-gray-700 text-base">{subtitle}</p>
      </div>
    </div>
  );
}

export default Cards;
