
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface TechnicalAccordionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const TechnicalAccordion: React.FC<TechnicalAccordionProps> = ({
  title,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "border border-stone-200 rounded-lg overflow-hidden shadow-subtle bg-white reveal-on-scroll",
        className
      )}
    >
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none transition-all duration-300 hover:bg-stone-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-stone-800">{title}</h3>
        <span className="text-wednesday-500 ml-4">
          {isOpen ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-6 border-t border-stone-200 bg-stone-50">{children}</div>
      </div>
    </div>
  );
};

export default TechnicalAccordion;
