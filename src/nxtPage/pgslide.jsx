import React, { useState } from 'react';
import dealer from '../assets/dealer.jpg';
import Message from './Message';

const ColorCarousel = () => {
  const colors = ['#FF5733', '#33FF57', '#5733FF', `url(${dealer})`, <Message />]; // Example colors

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextColor = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const prevColor = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + colors.length) % colors.length);
  };

  return (
    <div className="relative">
      <div
        className="w-full h-screen flex items-center justify-center transition-background-color duration-300"
        style={{ background: colors[currentIndex] }}
      >
        {currentIndex === colors.length - 1 ? (
          <p className="text-white font-bold text-4xl">Message Slide</p>
        ) : (
          <p className="text-white font-bold text-4xl">Color Slide {currentIndex + 1}</p>
        )}
      </div>

      <button
        onClick={prevColor}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
        Prev
      </button>

      <button
        onClick={nextColor}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default ColorCarousel;
