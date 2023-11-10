import React, { useState, useEffect } from 'react';

const images = [
  { url: 'link1', src: 'image1.jpg' },
  { url: 'link2', src: 'image2.jpg' },
  { url: 'link3', src: 'image3.jpg' },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto mt-8 relative overflow-hidden">
      <div className="slider-container flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <a key={index} href={image.url} target="_blank" rel="noopener noreferrer" className="slide min-w-full flex-shrink-0">
            <img src={image.src} alt={`Image ${index + 1}`} className="w-full" />
          </a>
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between">
        <button onClick={prevSlide} className="bg-gray-800 text-white p-2 rounded-full">Previous</button>
        <button onClick={nextSlide} className="bg-gray-800 text-white p-2 rounded-full">Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
