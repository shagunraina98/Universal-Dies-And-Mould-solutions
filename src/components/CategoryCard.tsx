import React from 'react';
import * as Icons from 'lucide-react';

interface CategoryCardProps {
  title: string;
  iconName: keyof typeof Icons; // name of lucide-react icon, e.g., "Tool", "Factory"
}

export default function CategoryCard({ title, iconName }: CategoryCardProps) {
  const Icon = Icons[iconName] as React.ComponentType<{ className?: string }>;

  return (
    <div className="group relative flex flex-col items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-industrialBlue/10 to-accent/10 mb-4 ring-1 ring-industrialBlue/20 dark:ring-accent/30">
        {Icon ? <Icon className="h-10 w-10 text-yellow-600 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" /> : null}
      </div>
      <h3 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-gray-100 text-center">
        {title}
      </h3>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-transparent group-hover:ring-industrialBlue/30 dark:group-hover:ring-accent/40" />
    </div>
  );
}
