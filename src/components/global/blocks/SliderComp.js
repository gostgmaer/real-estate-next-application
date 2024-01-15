const { useState, useEffect } = require("react");






export const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    'https://source.unsplash.com/random/800x400',
    'https://source.unsplash.com/random/801x400',
    'https://source.unsplash.com/random/802x400',
    'https://source.unsplash.com/random/803x400',
    // Add more image URLs as needed
  ];

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden ">
      <div className="flex h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slider Image ${index}`}
            className="w-full h-full object-cover p-10 border rounded-lg"
          />
        ))}
      </div>

      <div className="absolute bottom-0 -translate-y-1/2 flex items-center w-full justify-center px-4">
      <div className="flex items-center  ">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`h-4 w-4 mx-1 cursor-pointer  ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 flex items-center w-full justify-between px-2">
        <button onClick={handlePrev} className="text-3xl font-bold  focus:outline-none">&lt;</button>
      
        <button onClick={handleNext} className="text-3xl font-bold  focus:outline-none">&gt;</button>
      </div>
    </div>
  );
};