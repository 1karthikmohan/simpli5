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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [autoPlayInterval, setAutoPlayInterval] = useState(4000); // Default 4 seconds

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length, autoPlayInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    // Reset auto-play timer to 10 seconds after manual interaction
    setAutoPlayInterval(10000);
    setIsAutoPlaying(true);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // Reset auto-play timer to 10 seconds after manual interaction
    setAutoPlayInterval(10000);
    setIsAutoPlaying(true);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    // Reset auto-play timer to 10 seconds after manual interaction
    setAutoPlayInterval(10000);
    setIsAutoPlaying(true);
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
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
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
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="flex justify-center space-x-2 mt-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-600 dark:bg-primary-400 w-6'
                  : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Caption */}
      <div className="mt-2 text-center">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {images[currentIndex].caption}
        </p>
      </div>
    </div>
  );
};

export default ImageCarousel;