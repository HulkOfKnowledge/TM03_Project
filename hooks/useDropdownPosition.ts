import { useEffect, useState, RefObject } from 'react';

interface DropdownPositionOptions {
  dropdownWidth?: number;
  offset?: number;
  direction?: 'horizontal' | 'vertical';
}

/**
 * Hook to detect dropdown position relative to viewport edges
 * Automatically adjusts positioning to keep dropdowns visible
 */
export function useDropdownPosition(
  triggerRef: RefObject<HTMLElement>,
  isOpen: boolean,
  options: DropdownPositionOptions = {}
) {
  const {
    dropdownWidth = 200,
    offset = 8,
    direction = 'horizontal',
  } = options;

  const [position, setPosition] = useState<'left' | 'right' | 'top' | 'bottom'>(
    direction === 'horizontal' ? 'right' : 'bottom'
  );

  useEffect(() => {
    if (!isOpen || !triggerRef.current) return;

    const updatePosition = () => {
      if (!triggerRef.current) return;

      const rect = triggerRef.current.getBoundingClientRect();
      const padding = 16; // Additional padding for mobile edges

      if (direction === 'horizontal') {
        const spaceOnRight = window.innerWidth - rect.right - padding;
        const spaceOnLeft = rect.left - padding;

        // Check if dropdown fits on the right, otherwise position left
        // Prefer right when both sides have space
        if (spaceOnRight >= dropdownWidth + offset) {
          setPosition('right');
        } else if (spaceOnLeft >= dropdownWidth + offset) {
          setPosition('left');
        } else {
          // Choose the side with more space
          setPosition(spaceOnRight > spaceOnLeft ? 'right' : 'left');
        }
      } else {
        const spaceBelow = window.innerHeight - rect.bottom - padding;
        const spaceAbove = rect.top - padding;

        // Check if dropdown fits below, otherwise position above
        if (spaceBelow >= dropdownWidth + offset) {
          setPosition('bottom');
        } else if (spaceAbove >= dropdownWidth + offset) {
          setPosition('top');
        } else {
          // Choose the side with more space
          setPosition(spaceBelow > spaceAbove ? 'bottom' : 'top');
        }
      }
    };

    updatePosition();

    // Update on scroll or resize
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen, triggerRef, dropdownWidth, offset, direction]);

  return position;
}
