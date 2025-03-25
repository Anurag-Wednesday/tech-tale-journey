
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = items.map((item) => document.getElementById(item.href.substring(1)));
      
      const currentSection = sections.findIndex((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection !== -1) {
        setActiveSection(items[currentSection].href);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white bg-opacity-80 backdrop-blur-md shadow-subtle"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        <div className="flex-1 flex items-center">
          <span className="text-xl font-display font-medium text-stone-900">
            <span className="text-wednesday-500">Wednesday</span> Solutions
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "py-2 text-sm font-medium transition-all duration-300",
                activeSection === item.href
                  ? "text-wednesday-500 hover-link after:w-full"
                  : "text-stone-700 hover:text-wednesday-500 hover-link"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-stone-700 hover:text-wednesday-500 transition-colors duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-white bg-opacity-95 backdrop-blur-md z-40 transition-all duration-300 flex flex-col justify-center items-center",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="flex flex-col space-y-6 text-center">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className={cn(
                "text-xl font-medium py-2 px-4 transition-all duration-300",
                activeSection === item.href
                  ? "text-wednesday-500"
                  : "text-stone-700 hover:text-wednesday-500"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
