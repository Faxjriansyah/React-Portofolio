import { useState } from "react";

export const CertificateCarousel = ({ certificates, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  if (!certificates || certificates.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold">{certificates[currentIndex].name}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl">
            &times;
          </button>
        </div>

        <div className="relative">
          <div className="aspect-video bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            <img
              src={certificates[currentIndex].imageUrl}
              alt={certificates[currentIndex].name}
              className="object-contain max-h-[70vh] w-full"
              onError={(e) => {
                e.target.src = "/fallback-certificate.png";
                e.target.className = "object-cover w-full h-full";
              }}
            />
          </div>

          {certificates.length > 1 && (
            <>
              <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all" aria-label="Previous certificate">
                &larr;
              </button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all" aria-label="Next certificate">
                &rarr;
              </button>
            </>
          )}
        </div>

        <div className="p-4 space-y-2 border-t">
          <p>
            <span className="font-semibold">Issuer:</span> {certificates[currentIndex].issuer}
          </p>
          <p>
            <span className="font-semibold">Date:</span> {certificates[currentIndex].date}
          </p>
          {certificates.length > 1 && (
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              {currentIndex + 1} of {certificates.length} certificates
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
