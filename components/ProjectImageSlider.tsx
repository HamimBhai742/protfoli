'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImageSliderProps {
  images: string[];
  title: string;
}

const ProjectImageSlider = ({ images, title }: ProjectImageSliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mb-12 animate-slide-up animation-delay-800">
      <div className="relative glass-effect rounded-3xl overflow-hidden border border-white/10">
        {/* Main Image Display */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px]">
          <Image
            src={images[currentImageIndex]}
            alt={`${title} - Image ${currentImageIndex + 1}`}
            fill
            className=" transition-all duration-500"
            priority
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass-effect rounded-full hover:bg-white/20 transition-all duration-300 animate-glow"
              >
                <ChevronLeft size={24} className="text-blue-700" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass-effect rounded-full hover:bg-white/20 transition-all duration-300 animate-glow"
              >
                <ChevronRight size={24} className="text-amber-700" />
              </button>
            </>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 px-3 py-1 glass-effect rounded-full text-sm text-white">
              {currentImageIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="p-4 bg-black/20">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'border-indigo-400 scale-110'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectImageSlider;
