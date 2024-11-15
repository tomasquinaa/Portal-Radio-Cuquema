import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const newsItems = [
    {
      id: 1,
      image: 'data:image/jpeg;base64,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',
      title: 'Província chinesa decreta estado de emergência por Covid-19',
    },
    {
      id: 2,
      image: 'data:image/jpeg;base64,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',
      title: 'Trabalhadores da empresa construtora chinesa reclamam desrespeito e falta de...',
    },
    {
      id: 3,
      image: 'data:image/jpeg;base64,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',
      title: 'Inspeção geral do trabalho no Bié arrecada mais de quatro milhões de kwanzas devido ...',
    },
  ];

export const HeaderNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  // Automatic transition every 2 seconds
  useEffect(() => {
    const interval = setTimeout(() => {
      handleNext();
    }, 4000);

    // Clear the interval on component unmount or if currentIndex changes
    return () => clearTimeout(interval);
  }, [currentIndex]);

  return (
    <div className="bg-gray-900 text-white flex items-center p-4 rounded shadow-lg relative space-x-6">
      <div className="flex items-center font-bold text-lg space-x-2">
        <span role="img" aria-label="breaking news">
          🔴
        </span>
        <span>BREAKING NEWS</span>
      </div>
      <div className="flex-1 overflow-hidden relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="flex items-center min-w-full space-x-4"
            >
              <div className="relative w-14 h-14">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover rounded shadow-md"
                />
                <div className="absolute inset-0 bg-black opacity-30 rounded"></div>
              </div>
              <p className="text-white text-base font-semibold truncate">
                {news.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-x-3">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-label="Previous News"
        >
          <FaChevronLeft className="text-white text-lg" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-label="Next News"
        >
          <FaChevronRight className="text-white text-lg" />
        </button>
      </div>
    </div>
  );
};
