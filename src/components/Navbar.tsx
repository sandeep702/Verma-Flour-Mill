import React, { useState, useEffect } from 'react';
import { Menu, Home, FileText, Search, Contact, ShoppingCart, LogIn, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useAuth, useUser, SignOutButton } from '@clerk/clerk-react';
import { toast } from '@/hooks/use-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: FileText },
    { name: 'Products', href: '/products', icon: Search },
    { name: 'Contact', href: '/contact', icon: Contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleCartClick = () => {
    if (isSignedIn) {
      navigate('/cart');
    } else {
      toast({
        title: "Login Required",
        description: "Please login to view your cart",
        action: (
          <button 
            onClick={() => navigate('/login')}
            className="bg-wheat-gold text-white px-3 py-1 rounded text-sm hover:bg-brown-warm transition-colors"
          >
            Login
          </button>
        ),
      });
    }
  };

  return (
    <nav className={`bg-cream sticky h-24 content-center top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'} border-b border-gray-200`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-2">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-all duration-200" onClick={() => setIsOpen(false)}>
            <img src="/uploads/logo.png" alt="Logo" className="h-32 w-32 rounded-full" />
            <div className="hidden sm:block leading-tight animate-pulse hover:scale-105 transition-transform duration-500 ease-in-out">
              <h1 className="text-3xl font-extrabold tracking-wide text-green-700 hover:text-yellow-600 transition-colors duration-500">
                Verma
              </h1>
              <p className="text-lg italic text-gray-600 hover:text-yellow-500 transition-colors duration-500">
                Flour Mill
              </p>
            </div>
          </Link>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-2 py-2 text-[18px] font-bold rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-yellow-800 font-bold'
                      : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    {item.name}
                    <item.icon size={16} />
                  </div>
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            <button onClick={handleCartClick} className="relative">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-sm transition-all flex items-center gap-2">
                <ShoppingCart size={16} />
                Cart ({cartCount})
              </Button>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            <div className="hidden md:flex items-center space-x-3">
              {isLoaded && (
                isSignedIn ? (
                  <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2">
                      <img
                        src={user?.imageUrl || `https://ui-avatars.com/api/?name=${user?.fullName || 'User'}&background=random`}
                        alt="Profile"
                        className="w-10 h-10 rounded-full ring-2 ring-yellow-500 ring-offset-2 transition-all hover:scale-110"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-800">
                          {user?.fullName || 'User'}
                        </span>
                        <span className="text-xs text-gray-500">
                          {user?.emailAddresses[0]?.emailAddress}
                        </span>
                      </div>
                    </div>
                    <SignOutButton>
                      <Button
                        variant="outline"
                        className="border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        Sign Out
                      </Button>
                    </SignOutButton>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Link to="/login">
                      <Button
                        variant="outline"
                        className="border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:scale-105 group"
                      >
                        <LogIn size={16} className="mr-2 group-hover:rotate-12 transition-transform" />
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup">
                      <Button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                )
              )}
            </div>

            <div className="md:hidden">
              <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </Button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t mt-2 rounded-b-lg shadow-md">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-yellow-100 text-yellow-700 font-semibold'
                      : 'text-gray-700 hover:bg-yellow-50'
                  }`}
                >
                  <span>{item.name}</span>
                  <item.icon size={18} />
                </Link>
              ))}
              <button onClick={handleCartClick} className="block relative w-full">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white transition-all">
                  <ShoppingCart size={16} className="mr-2" />
                  Cart ({cartCount})
                </Button>
              </button>
              <div className="border-t pt-4 px-4 space-y-3">
                {!isSignedIn && (
                  <>
                    <Link to="/login" onClick={() => setIsOpen(false)} className="block">
                      <Button variant="outline" className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white">
                        <LogIn size={16} className="mr-2" />
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsOpen(false)} className="block">
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white transition-all">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
                {isSignedIn && (
                  <SignOutButton>
                    <Button
                      variant="outline"
                      className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white transition-all"
                    >
                      Sign Out
                    </Button>
                  </SignOutButton>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
