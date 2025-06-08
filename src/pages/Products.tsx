import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { useProducts } from '@/hooks/useProducts';
import LoadingPage from '@/components/LoadingPage';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    console.error('Products page error:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brown-warm mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-4">
            We couldn't load our products. Please try refreshing the page.
          </p>
          <Button onClick={() => window.location.reload()}>
            Refresh Page
          </Button>
        </div>
      </div>
    );
  }

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'wheat', name: 'Wheat Flour' },
    { id: 'millets', name: 'Millet Flour' },
    { id: 'multigrain', name: 'Multigrain' },
    { id: 'organic', name: 'Organic' }
  ];

  const filteredProducts = products?.filter(product => 
    selectedCategory === 'all' || 
    product.category === selectedCategory ||
    (selectedCategory === 'organic' && product.is_organic)
  ) || [];

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return Number(a.price) - Number(b.price);
      case 'price-high':
        return Number(b.price) - Number(a.price);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-wheat-light to-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-brown-warm mb-6 tracking-tight">
              Discover Our Finest Flours
            </h1>
            <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
              Our flours are crafted using modern machines while preserving the soul of tradition — 
              ensuring freshness, nutrition, and love in every bite.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? 'bg-wheat-gold hover:bg-brown-warm text-white'
                      : 'border-wheat-gold text-wheat-gold hover:bg-wheat-gold hover:text-white'
                  } transition-all duration-200`}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-3">
              <label htmlFor="sortBy" className="text-sm font-semibold font-serif text-gray-800">
                Sort by:
              </label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 text-sm font-semibold text-orange-600 bg-white hover:border-wheat-gold focus:outline-none focus:ring-2 focus:ring-wheat-gold transition"
              >
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Product Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {sortedProducts.length} of {products?.length || 0} products
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                id={product.id}
                name={product.name}
                price={Number(product.price)}
                originalPrice={product.original_price ? Number(product.original_price) : undefined}
                image={product.image_url || '/uploads/product.png'}
                description={product.description || ''}
                weight={product.weight || ''}
                isOrganic={product.is_organic || false}
                isNew={product.is_new || false}
                rating={product.rating || 5}
              />
            ))}
          </div>

          {/* Empty State */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🌾</div>
              <h3 className="text-xl font-semibold text-brown-warm mb-2">
                No products found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters to find what you're looking for.
              </p>
              <Button
                onClick={() => setSelectedCategory('all')}
                className="bg-wheat-gold hover:bg-brown-warm text-white"
              >
                View All Products
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Quality Promise Section */}
      <section className="py-16 bg-wheat-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-warm mb-4">
              Our Quality Promise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Since <span className="font-semibold text-brown-warm">2003</span>, we've blended modern milling machines with traditional values — ensuring top quality, freshness, and trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 bg-white rounded-xl shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-wheat-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                <span className="text-3xl">🌾</span>
              </div>
              <h3 className="font-semibold text-brown-warm text-lg mb-2">Stone Ground</h3>
              <p className="text-sm text-gray-600">Traditional chakki grinding preserves natural nutrients.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 bg-white rounded-xl shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-wheat-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="font-semibold text-brown-warm text-lg mb-2">Modern Machines</h3>
              <p className="text-sm text-gray-600">We use the latest tech to enhance purity and efficiency.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 bg-white rounded-xl shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-wheat-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                <span className="text-3xl">❤️‍🔥</span>
              </div>
              <h3 className="font-semibold text-brown-warm text-lg mb-2">Made with Love</h3>
              <p className="text-sm text-gray-600">
                Crafted with care and precision — we use modern machinery for flour preparation to ensure consistency, purity, and a touch of love in every bite.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6 bg-white rounded-xl shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-wheat-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                <span className="text-3xl">📦</span>
              </div>
              <h3 className="font-semibold text-brown-warm text-lg mb-2">Safe Packaging</h3>
              <p className="text-sm text-gray-600">Airtight & eco-friendly packaging to lock in freshness.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
