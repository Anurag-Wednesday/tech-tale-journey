
import React from "react";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  className,
}) => {
  return (
    <div
      className={cn(
        "glass-panel p-8 rounded-xl relative reveal-on-scroll",
        className
      )}
    >
      <Quote
        size={40}
        className="absolute top-4 left-4 text-stone-200 opacity-40"
      />
      <div className="relative">
        <blockquote className="text-lg md:text-xl text-stone-700 mb-6 leading-relaxed italic">
          "{quote}"
        </blockquote>
        <footer>
          <cite className="not-italic">
            <span className="font-medium text-stone-800 block">{author}</span>
            <span className="text-stone-500 text-sm">{role}</span>
          </cite>
        </footer>
      </div>
    </div>
  );
};

export default Testimonial;
