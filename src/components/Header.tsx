import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from 'figma:asset/a1d658c7cd3aa3a82d6716d78e7c95d4ad7a82b9.png';

const navLinks = [
  { label: 'Features', href: 'features' },
  { label: 'Courses', href: 'courses' },
  { label: 'Pricing', href: 'pricing' },
  { label: 'How it works', href: 'how-it-works' }
];

export function Header({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(6, 16, 34, 0)', 'rgba(6, 16, 34, 0.95)']
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-white/10 backdrop-blur-xl' : ''
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Left side - Logo on desktop, hamburger on mobile */}
          <div className="flex items-center">
            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center text-white hover:text-white/70 transition-colors mr-4"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo */}
            <motion.button
              onClick={() => onNavigate?.('home')}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 group"
            >
              <img 
                src={logoImg} 
                alt="Studia" 
                className="h-10 sm:h-12 w-auto group-hover:scale-105 transition-transform"
              />
            </motion.button>
          </div>

          {/* Center - Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

          {/* Right side - Download button */}
          <motion.button
            onClick={() => scrollToSection('download')}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-10 px-6 bg-[#0033A0] text-white rounded-full hover:bg-[#0033A0]/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,51,160,0.3)] flex items-center justify-center text-sm lg:text-base"
          >
            Download
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden border-t border-white/10 bg-[#061022]/95 backdrop-blur-xl"
        >
          <nav className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-white/70 hover:text-white transition-colors duration-200 py-2"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => scrollToSection('download')}
                className="block w-full h-12 px-6 bg-[#0033A0] text-white rounded-full hover:bg-[#0033A0]/90 transition-all duration-300 flex items-center justify-center"
              >
                Download
              </button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
