
import React from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
}) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-stone-900/70 to-stone-800/60"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-screen-lg mx-auto text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 animate-slide-down">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-10 animate-slide-down animation-delay-300">
          {subtitle}
        </p>
        
        {/* Scroll down indicator */}
        <div className="hidden md:block absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-pulse-slow">
          <a
            href="#introduction"
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm font-medium mb-2">Learn More</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
