import React from 'react';

function Cards() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        src="https://www.polybags.com/wp-content/uploads/2020/10/gusset-poly-bags.jpg"
        alt="Card"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2">Card title</h5>
        <p className="text-gray-700 text-base">
          Some quick example text to build on the card title and make up the bulk of the card’s content.
        </p>
      </div>
    </div>
  );
}

export default Cards;
