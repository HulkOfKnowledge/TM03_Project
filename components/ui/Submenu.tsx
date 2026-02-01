/**
 * Submenu Component
 * Reusable submenu with automatic edge detection and positioning
 */

'use client';

import { useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useDropdownPosition } from '@/hooks/useDropdownPosition';

interface SubmenuProps {
  isOpen: boolean;
  onClose: () => void;
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
  width?: number;
}

export function Submenu({
  isOpen,
  onClose,
  trigger,
  children,
  className,
  width = 160,
}: SubmenuProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const position = useDropdownPosition(triggerRef, isOpen, {
    dropdownWidth: width,
    direction: 'horizontal',
  });

  return (
    <div className="relative" ref={triggerRef}>
      {trigger}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className={cn(
              'absolute top-0 bg-background border border-border rounded-lg shadow-lg z-50 overflow-hidden',
              position === 'left' ? 'right-full mr-1' : 'left-full ml-1',
              className
            )}
            style={{ 
              width: `${width}px`,
              maxHeight: 'calc(100vh - 100px)',
              overflowY: 'auto'
            }}
            onMouseLeave={onClose}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
}

interface SubmenuItemProps {
  onClick: () => void;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function SubmenuItem({
  onClick,
  icon,
  children,
  className,
}: SubmenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 w-full px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors',
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
