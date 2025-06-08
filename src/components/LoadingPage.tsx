
import React from 'react';
import { HeroShimmer, ProductCardShimmer, NavbarShimmer, TestimonialShimmer, FAQShimmer } from './LoadingShimmer';

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-wheat-light">
      <NavbarShimmer />
      <HeroShimmer />
      
      {/* Featured Products Loading */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-8 w-80 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="h-5 w-96 bg-gray-100 rounded mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <ProductCardShimmer key={i} />
            ))}
          </div>

          <div className="text-center">
            <div className="h-12 w-40 bg-gray-300 rounded mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Loading */}
      <section className="py-12 bg-gradient-to-b from-wheat-light to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="h-8 w-80 bg-gray-200 rounded mx-auto mb-2"></div>
            <div className="h-5 w-64 bg-gray-100 rounded mx-auto"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center p-6 rounded-xl shadow-sm bg-white border border-gray-100">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <div className="h-5 w-32 bg-gray-200 rounded mx-auto mb-2"></div>
                <div className="h-4 w-full bg-gray-100 rounded mb-1"></div>
                <div className="h-4 w-3/4 bg-gray-100 rounded mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Loading */}
      <section className="py-16 bg-gradient-to-br from-cream to-wheat-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-8 w-64 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="h-5 w-80 bg-gray-100 rounded mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <TestimonialShimmer key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Loading */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-8 w-80 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="h-5 w-96 bg-gray-100 rounded mx-auto"></div>
          </div>
          <FAQShimmer />
        </div>
      </section>

      {/* Footer Loading */}
      <footer className="bg-brown-warm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-5 w-32 bg-gray-300 rounded"></div>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="h-4 w-24 bg-gray-300 rounded"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoadingPage;
