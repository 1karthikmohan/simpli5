import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getProjectImagePath } from '../data/projects';
import type { ProjectImage } from '../data/projects';

interface ImageCarouselProps {
  projectId: number;
  images: ProjectImage[];
  className?: string;
}

const ImageCarousel = ({ projectId, images, className = '' }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [intervalDuration, setIntervalDuration] = useState(4000);

  // Auto-play functionality
  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [images.length, isHovered, intervalDuration, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIntervalDuration(10000); // 10 seconds after manual control
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIntervalDuration(10000); // 10 seconds after manual control
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIntervalDuration(10000); // 10 seconds after manual control
  };

  if (images.length === 0) {
    return (
      <div className={`aspect-video bg-neutral-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center ${className}`}>
        <span className="text-neutral-500 dark:text-neutral-400">No images available</span>
      </div>
    );
  }

  return (
    <div 
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image Container */}
      <div className="relative aspect-video overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
        <img
          src={getProjectImagePath(projectId, images[currentIndex].filename)}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-opacity duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.co/800x450/e2e8f0/64748b?text=${encodeURIComponent(images[currentIndex].caption)}`;
          }}
        />
        
        {/* Navigation Arrows - Show when multiple images and on hover */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Pause Indicator */}
        {isHovered && images.length > 1 && (
          <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
            Paused
          </div>
        )}
      </div>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-600 dark:bg-primary-400 w-8'
                  : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500 w-2'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Caption */}
      <div className="mt-3 text-center">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {images[currentIndex].caption}
        </p>
      </div>
    </div>
  );
};

export default ImageCarousel;