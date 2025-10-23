import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { AnimatedIcon } from './AnimatedIcon';
import animatedIconGif from '../assets/animated-icon.gif';

const problemMetrics = [
  {
    value: "500+ hours",
    description: "of focused study required for professional qualifications",
    color: "from-red-400 to-red-600"
  },
  {
    value: "70% failure rate",
    description: "with traditional one-size-fits-all study methods",
    color: "from-orange-400 to-orange-600"
  },
  {
    value: "40% wasted time",
    description: "studying topics you already know while struggling with difficult concepts",
    color: "from-yellow-400 to-yellow-600"
  }
];

const solutionMetrics = [
  {
    value: "7x faster",
    description: "learning with AI-powered personalized study paths",
    color: "from-blue-400 to-cyan-400"
  },
  {
    value: "90% success rate",
    description: "with adaptive learning that evolves with your progress",
    color: "from-green-400 to-emerald-400"
  },
  {
    value: "Real-time",
    description: "knowledge gap identification and personalized recommendations",
    color: "from-purple-400 to-pink-400"
  }
];

export function ProblemSolution() {

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 py-32 overflow-hidden"
      style={{ 
        background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)'
      }}
    >
      {/* Dramatic cosmic neon background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main central glow - purple to blue gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at center, 
                rgba(168, 85, 247, 0.4) 0%, 
                rgba(147, 51, 234, 0.3) 20%, 
                rgba(59, 130, 246, 0.2) 40%, 
                rgba(30, 64, 175, 0.1) 60%, 
                transparent 80%
              )
            `,
            filter: 'blur(80px)',
          }}
        />
        
        {/* Secondary glow layers for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, 
                rgba(236, 72, 153, 0.3) 0%, 
                rgba(168, 85, 247, 0.2) 30%, 
                transparent 60%
              )
            `,
            filter: 'blur(120px)',
          }}
        />
        
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 70% 60%, 
                rgba(59, 130, 246, 0.25) 0%, 
                rgba(30, 64, 175, 0.15) 40%, 
                transparent 70%
              )
            `,
            filter: 'blur(100px)',
          }}
        />

        {/* Starry field */}
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              boxShadow: '0 0 2px rgba(255, 255, 255, 0.8)',
            }}
          />
        ))}

        {/* Larger glowing stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.4,
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.9), 0 0 16px rgba(168, 85, 247, 0.3)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          {/* Animated Icon */}
          <AnimatedIcon 
            src={animatedIconGif} 
            alt="Study smarter icon"
            width={200}
            height={200}
            className="mb-6"
          />
          
          <h2 
            className="text-5xl lg:text-7xl font-bold text-white mb-8"
            style={{
              textShadow: '0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(59, 130, 246, 0.4)',
            }}
          >
            Study smarter, not harder
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your learning with AI-powered personalization that adapts to your unique style and pace.
          </p>
        </div>

        {/* Main Content Container */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left: Problem Metrics */}
            <div className="space-y-12">
              <h3 
                className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center lg:text-left"
                style={{
                  textShadow: '0 0 20px rgba(239, 68, 68, 0.5)',
                }}
              >
                The Problem
              </h3>
              
              {problemMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Enhanced glowing neon background layers */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-30 rounded-3xl blur-3xl scale-110 group-hover:scale-115 transition-all duration-700`} />
                  <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-20 rounded-3xl blur-2xl scale-105 group-hover:scale-110 transition-all duration-500`} />
                  <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-15 rounded-3xl blur-xl scale-102 group-hover:scale-105 transition-all duration-300`} />
                  
                  {/* Glassmorphism card with frosted glass effect */}
                  <div className="relative bg-white/8 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 group-hover:border-white/40 transition-all duration-500 shadow-2xl">
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl opacity-60" />
                    
                    <div
                      className={`text-6xl lg:text-7xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-4 relative z-10`}
                      style={{
                        textShadow: `0 0 40px rgba(168, 85, 247, 0.4)`,
                      }}
                    >
                      {metric.value}
                    </div>
                    
                    <p className="text-gray-200 text-lg lg:text-xl leading-relaxed relative z-10">
                      {metric.description}
                    </p>
                    </div>
                </div>
              ))}
            </div>

            {/* Right: Solution Metrics */}
            <div className="space-y-12">
              <h3 
                className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center lg:text-left"
                style={{
                  textShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
                }}
              >
                The Solution
              </h3>
              
              {solutionMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Enhanced glowing neon background layers */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-35 rounded-3xl blur-3xl scale-110 group-hover:scale-115 transition-all duration-700`} />
                  <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-25 rounded-3xl blur-2xl scale-105 group-hover:scale-110 transition-all duration-500`} />
                  <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-20 rounded-3xl blur-xl scale-102 group-hover:scale-105 transition-all duration-300`} />
                  
                  {/* Glassmorphism card with frosted glass effect */}
                  <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/35 group-hover:border-white/45 transition-all duration-500 shadow-2xl">
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-3xl opacity-70" />
                    
                    <div
                      className={`text-6xl lg:text-7xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-4 relative z-10`}
                      style={{
                        textShadow: `0 0 50px rgba(34, 197, 94, 0.5)`,
                      }}
                    >
                      {metric.value}
                    </div>
                    
                    <p className="text-gray-200 text-lg lg:text-xl leading-relaxed relative z-10">
                      {metric.description}
                    </p>
                    
                    {/* Subtle underline effect for interactive elements */}
                    {index === 1 && (
                      <div className="mt-2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-60 relative z-10" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
