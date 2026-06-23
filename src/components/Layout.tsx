import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-white -z-10"></div>
      <div className="fixed inset-0 bg-[url('https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-5 -z-20"></div>
      
      <Navbar />
      
      <main>
        {children}
      </main>
      
      <Footer />
      
      {showScrollTop && (
        <motion.button
          className="fixed bottom-8 right-8 p-3 rounded-full glass-card shadow-lg text-primary-700 hover:text-primary-800 z-50"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </div>
  );
}