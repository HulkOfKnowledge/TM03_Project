/**
 * Checklist Item Component
 * Reusable component for beginner's checklist items
 */

'use client';

import Link from 'next/link';
import { BookOpen, CreditCard, Bell, Award } from 'lucide-react';
import type { ChecklistItem as ChecklistItemType } from '@/types/learn.types';

interface ChecklistItemProps {
  item: ChecklistItemType;
}

export function ChecklistItem({ item }: ChecklistItemProps) {
  const getIcon = () => {
    switch (item.icon) {
      case 'book':
        return <BookOpen className="h-6 w-6 text-brand" />;
      case 'card':
        return <CreditCard className="h-6 w-6 text-brand" />;
      case 'bell':
        return <Bell className="h-6 w-6 text-brand" />;
      case 'award':
        return <Award className="h-6 w-6 text-brand" />;
      default:
        return <BookOpen className="h-6 w-6 text-brand" />;
    }
  };

  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center">
        {getIcon()}
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            {item.title}
          </h3>
          <Link
            href={item.actionUrl}
            className="text-sm text-brand hover:text-[#5558E3] font-medium whitespace-nowrap ml-4 transition-colors"
          >
            {item.completed ? 'View' : 'Get Started'}
          </Link>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
      </div>
    </div>
  );
}
