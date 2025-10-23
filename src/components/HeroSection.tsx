import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

// Import hero images with fallback handling
let heroImage: string;

try {
  heroImage = new URL('/public/images/hero-image.png', import.meta.url).href;
} catch {
  heroImage = '';
}

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Parallax effect for hero image
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroImageOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-32 sm:pt-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0,51,160,0.3) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(0,51,160,0.4) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-8 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div 
            style={{ y: headlineY, opacity: headlineOpacity }}
            className="space-y-8 lg:space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 0.78, 0.4, 1] }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white">
                Your personal study companion.
              </h1>
              <p className="text-xl lg:text-2xl text-white/65 max-w-xl leading-relaxed">
                AI-powered study plans, intelligent flashcards and realistic mock exams designed specifically for UK professional qualifications. Study smarter, not harder, and achieve your career goals with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.78, 0.4, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="h-12 px-8 bg-[#0033A0] text-white rounded-full hover:bg-[#0033A0]/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,51,160,0.3)] flex items-center justify-center gap-2 group">
                Get started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="h-12 px-8 bg-transparent border border-white/12 text-white rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center">
                View pricing
              </button>
            </motion.div>
          </motion.div>

          {/* Right content - Hero Image & Mockups */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[700px]">
            {/* Hero Image with Parallax Effect */}
            <motion.div
              style={{ y: heroImageY, opacity: heroImageOpacity }}
              className="absolute inset-0"
            >
              {heroImage ? (
                <img
                  src={heroImage}
                  alt="Studia App Interface"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 40px rgba(0,51,160,0.3))',
                  }}
                />
              ) : (
                <div className="w-full h-full rounded-3xl shadow-2xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #0F1720 0%, #0B0F12 100%)',
                    border: '2px solid rgba(0,51,160,0.3)',
                    boxShadow: '0 0 40px rgba(0,51,160,0.3), inset 0 0 60px rgba(0,51,160,0.1)'
                  }}
                >
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-[#0033A0]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <div className="w-10 h-10 bg-[#0033A0] rounded-full" />
                    </div>
                    <h3 className="text-white text-xl mb-4">Studia App</h3>
                    <p className="text-white/60 text-sm">Hero image placeholder</p>
                    <p className="text-white/40 text-xs mt-2">Add hero-image.png to /public/images/</p>
                  </div>
                </div>
              )}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
