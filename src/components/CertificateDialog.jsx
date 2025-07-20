import { useState } from 'react';

export const CertificateCarousel = ({ certificates, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{certificates[currentIndex].name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        <div className="relative">
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={certificates[currentIndex].imageUrl}
              alt={certificates[currentIndex].name}
              className="object-contain w-full h-full"
            />
          </div>

          {certificates.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                ❮
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                ❯
              </button>
            </>
          )}
        </div>

        <div className="space-y-2 mt-4">
          <p>
            <span className="font-semibold">Issued by:</span> {certificates[currentIndex].issuer}
          </p>
          <p>
            <span className="font-semibold">Date obtained:</span> {certificates[currentIndex].date}
          </p>
          <p className="text-center text-sm text-gray-500">
            {currentIndex + 1} of {certificates.length}
          </p>
        </div>
      </div>
    </div>
  );
};