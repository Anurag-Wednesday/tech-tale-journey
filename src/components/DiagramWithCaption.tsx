
import React from "react";
import { cn } from "@/lib/utils";

interface DiagramWithCaptionProps {
  imageSrc: string;
  altText: string;
  caption: string;
  className?: string;
}

const DiagramWithCaption: React.FC<DiagramWithCaptionProps> = ({
  imageSrc,
  altText,
  caption,
  className,
}) => {
  return (
    <figure className={cn("reveal-on-scroll", className)}>
      <div className="overflow-hidden rounded-lg shadow-elevation bg-white">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-3 text-center text-stone-600 italic px-4">
        {caption}
      </figcaption>
    </figure>
  );
};

export default DiagramWithCaption;
