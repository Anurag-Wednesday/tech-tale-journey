
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  className,
  children,
  title,
  subtitle,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = sectionRef.current?.querySelectorAll(".reveal-on-scroll");
    revealElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      revealElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "py-20 px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-xl mx-auto scroll-mt-20",
        className
      )}
    >
      {title && (
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-3 reveal-on-scroll">
            {title}
          </h2>
          {subtitle && (
            <p className="text-stone-600 text-lg max-w-2xl mx-auto reveal-on-scroll">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};

export default SectionContainer;
