/**
 * Learning Carousel Component
 * Reusable carousel for learning content with navigation
 */

'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LearningCard } from './LearningCard';
import type { LearningContent } from '@/types/learn.types';

interface LearningCarouselProps {
  items: LearningContent[];
  itemsPerPage?: number;
  onItemClick?: (item: LearningContent) => void;
}

export function LearningCarousel({ 
  items, 
  itemsPerPage = 3, 
  onItemClick 
}: LearningCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const slideBy = 1;
  const scrollRef = useRef<HTMLDivElement>(null);

  const displayedItems = items.slice(
    currentPage,
    currentPage + itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) =>
      prev + slideBy >= items.length - itemsPerPage + 1 
        ? 0 
        : prev + slideBy
    );
  };

  const prevPage = () => {
    setCurrentPage((prev) =>
      prev === 0 
        ? items.length - itemsPerPage 
        : prev - slideBy
    );
  };

  const scrollMobile = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 296; // 280px card width + 16px gap
      const newScrollLeft = direction === 'right'
        ? scrollRef.current.scrollLeft + scrollAmount
        : scrollRef.current.scrollLeft - scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      {/* Mobile: Horizontal scroll */}
      <div className="md:hidden">
        <div ref={scrollRef} className="overflow-x-auto -mx-4 px-4 mb-8 scrollbar-hide">
          <div className="flex gap-4 pb-2">
            {items.map((content) => (
              <div key={content.id} className="flex-shrink-0 w-[280px]">
                <LearningCard
                  content={content}
                  onClick={() => onItemClick?.(content)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {items.length > 1 && (
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={() => scrollMobile('left')}
              className="h-12 w-12 rounded-full bg-brand text-white hover:bg-[#5558E3] transition-colors flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollMobile('right')}
              className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-800 text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      {/* Desktop: Grid with pagination */}
      <div className="hidden md:block">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {displayedItems.map((content) => (
            <LearningCard
              key={content.id}
              content={content}
              onClick={() => onItemClick?.(content)}
            />
          ))}
        </div>

        {/* Desktop Navigation */}
        {items.length > itemsPerPage && (
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={prevPage}
              className="h-14 w-14 rounded-full bg-brand text-white hover:bg-[#5558E3] transition-colors flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextPage}
              className="h-14 w-14 rounded-full bg-gray-300 dark:bg-gray-800 text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
