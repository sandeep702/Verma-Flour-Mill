import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';
import LoadingPage from '@/components/LoadingPage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useProducts } from '@/hooks/useProducts';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { data: products, isLoading: productsLoading } = useProducts();

  useEffect(() => {
    // Simulate loading time for initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || productsLoading) {
    return <LoadingPage />;
  }

  // Get first 3 products for featured section
  const featuredProducts = products?.slice(0, 3) || [];

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-warm mb-4">
              Our Premium Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our range of fresh, stone-ground flours made with traditional methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
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

          <div className="text-center">
            <Link to="/products">
              <Button size="lg" className="bg-wheat-gold hover:bg-brown-warm text-white px-8 py-3 hover:scale-105 transition-all duration-200">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us section */}
      <section className="py-12 bg-gradient-to-b from-wheat-light to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brown-warm drop-shadow-md">
              Why Choose Verma Flour Mill?
            </h2>
            <p className="mt-2 text-lg text-gray-700">
              Since 2003 — Blending Traditional Wisdom with Modern Precision
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Traditional Method */}
            <div className="group text-center p-6 rounded-xl shadow-md bg-white hover:bg-wheat-light/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-wheat-gold rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">🌾</span>
              </div>
              <h3 className="text-xl font-semibold text-brown-warm">Traditional Method</h3>
              <p className="text-gray-600 mt-2">
                Stone-ground using age-old chakki techniques that retain all nutrients.
              </p>
            </div>

            {/* Fresh & Pure */}
            <div className="group text-center p-6 rounded-xl shadow-md bg-white hover:bg-wheat-light/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-lime-400 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-brown-warm">Fresh & Pure</h3>
              <p className="text-gray-600 mt-2">
                No preservatives — only freshly ground flour tailored to your order.
              </p>
            </div>

            {/* Modern Machinery */}
            <div className="group text-center p-6 rounded-xl shadow-md bg-white hover:bg-wheat-light/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold text-brown-warm">Modern Machines</h3>
              <p className="text-gray-600 mt-2">
                Precision milling using advanced, hygienic, and efficient machinery.
              </p>
            </div>

            {/* Home Delivery */}
            <div className="group text-center p-6 rounded-xl shadow-md bg-white hover:bg-wheat-light/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto  transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-brown-warm">Home Delivery</h3>
              <p className="text-gray-600 mt-2">
                Pure, warm flour delivered fresh to your doorstep — right on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Feedback />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
