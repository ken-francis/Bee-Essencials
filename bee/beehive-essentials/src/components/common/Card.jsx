import React from 'react';

export default function Card({ title, price, image, alt = "Beehive product" }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={image} 
        alt={alt} 
        className="w-full h-64 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-dark mb-2">{title}</h3>
        <p className="text-2xl font-bold text-primary mb-4">{price}</p>
        <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-amber-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}