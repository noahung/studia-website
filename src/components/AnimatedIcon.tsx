import React from 'react';

interface AnimatedIconProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function AnimatedIcon({ 
  src, 
  alt, 
  className = "", 
  width = 120, 
  height = 120 
}: AnimatedIconProps) {
  return (
    <div className={`flex justify-center mb-8 ${className}`}>
      <div 
        className="relative"
        style={{
          filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.6)) drop-shadow(0 0 40px rgba(59, 130, 246, 0.4))',
        }}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-contain"
          style={{
            // Ensure smooth animation
            imageRendering: 'auto',
            // Add subtle hover effect
            transition: 'transform 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
      </div>
    </div>
  );
}
