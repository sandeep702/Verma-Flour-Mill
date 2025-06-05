
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { useEffect } from "react";
import { ClerkProvider } from '@clerk/clerk-react';
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import SignUpPage from "./pages/SignUp";

// Initialize the query client
const queryClient = new QueryClient();

// Get the Clerk publishable key from environment variables
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

console.log('Environment check:', {
  nodeEnv: import.meta.env.MODE,
  hasKey: !!PUBLISHABLE_KEY,
  keyLength: PUBLISHABLE_KEY?.length || 0,
  keyPrefix: PUBLISHABLE_KEY?.substring(0, 10) || 'none'
});

if (!PUBLISHABLE_KEY) {
  console.error('Missing Clerk Publishable Key. Current env:', import.meta.env);
  throw new Error("Missing Clerk Publishable Key. Please add VITE_CLERK_PUBLISHABLE_KEY to your environment variables.");
}

// Navigation handler component for custom navigation logic
const NavigationHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleNavigation = (event: CustomEvent) => {
      navigate(event.detail.path);
    };

    window.addEventListener('navigate-to-cart', handleNavigation as EventListener);
    return () => window.removeEventListener('navigate-to-cart', handleNavigation as EventListener);
  }, [navigate]);

  return null;
};

const App = () => (
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <NavigationHandler />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ClerkProvider>
);

export default App;
