
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface ShimmerProps {
  className?: string;
}

export const HeroShimmer = ({ className = "" }: ShimmerProps) => (
  <section className={`relative min-h-[600px] flex items-center overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-cream to-wheat-light"></div>
    <div className="max-w-8xl mx-auto px-4 mt-20 mb-10 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <Skeleton className="h-12 w-3/4 bg-gray-200" />
            <Skeleton className="h-8 w-1/2 bg-gray-200" />
            <Skeleton className="h-6 w-1/3 bg-gray-200" />
            <Skeleton className="h-24 w-full bg-gray-200 rounded-xl" />
          </div>
          <div className="flex flex-wrap gap-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-4 w-20 bg-gray-200" />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Skeleton className="h-12 w-28 bg-gray-300 rounded" />
            <Skeleton className="h-12 w-28 bg-gray-200 rounded" />
          </div>
        </div>
        <div className="relative">
          <Skeleton className="w-full h-80 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  </section>
);

export const ProductCardShimmer = ({ className = "" }: ShimmerProps) => (
  <div className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden ${className}`}>
    <Skeleton className="w-full h-48 bg-gray-200" />
    <div className="p-4 space-y-3">
      <div className="flex justify-between items-start">
        <Skeleton className="h-5 w-3/4 bg-gray-200" />
        <Skeleton className="h-4 w-12 bg-gray-200" />
      </div>
      <Skeleton className="h-4 w-full bg-gray-100" />
      <Skeleton className="h-4 w-2/3 bg-gray-100" />
      <div className="flex justify-between items-center pt-2">
        <div className="space-y-1">
          <Skeleton className="h-5 w-16 bg-gray-200" />
          <Skeleton className="h-3 w-12 bg-gray-100" />
        </div>
        <Skeleton className="h-9 w-20 bg-gray-300 rounded" />
      </div>
    </div>
  </div>
);

export const NavbarShimmer = ({ className = "" }: ShimmerProps) => (
  <nav className={`bg-cream sticky h-24 content-center top-0 z-50 shadow-sm border-b border-gray-100 ${className}`}>
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-2">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-3">
          <Skeleton className="h-16 w-16 rounded-full bg-gray-200" />
          <div className="hidden sm:block space-y-2">
            <Skeleton className="h-6 w-24 bg-gray-200" />
            <Skeleton className="h-3 w-20 bg-gray-100" />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-5">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-6 w-16 bg-gray-200" />
            ))}
          </div>
          <Skeleton className="h-10 w-24 bg-gray-300 rounded-lg" />
          <Skeleton className="h-8 w-8 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  </nav>
);

export const TestimonialShimmer = ({ className = "" }: ShimmerProps) => (
  <div className={`bg-white p-5 rounded-xl shadow-sm border border-gray-100 ${className}`}>
    <div className="flex items-center mb-3">
      <Skeleton className="w-10 h-10 rounded-full bg-gray-200" />
      <div className="ml-3 space-y-2">
        <Skeleton className="h-4 w-20 bg-gray-200" />
        <Skeleton className="h-3 w-16 bg-gray-100" />
      </div>
    </div>
    <div className="space-y-2">
      <Skeleton className="h-4 w-full bg-gray-100" />
      <Skeleton className="h-4 w-5/6 bg-gray-100" />
      <Skeleton className="h-4 w-3/4 bg-gray-100" />
    </div>
    <div className="flex justify-center mt-3">
      <Skeleton className="h-4 w-20 bg-gray-200" />
    </div>
  </div>
);

export const FAQShimmer = ({ className = "" }: ShimmerProps) => (
  <div className={`space-y-3 ${className}`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="border border-gray-100 rounded-lg p-4 bg-white">
        <Skeleton className="h-5 w-3/4 bg-gray-200 mb-2" />
        <Skeleton className="h-4 w-full bg-gray-100 mb-1" />
        <Skeleton className="h-4 w-2/3 bg-gray-100" />
      </div>
    ))}
  </div>
);
