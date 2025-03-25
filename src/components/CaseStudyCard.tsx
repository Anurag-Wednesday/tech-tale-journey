
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CaseStudyData } from "@/data/caseStudies";
import { en } from "@/translations/en";

interface CaseStudyCardProps {
  caseStudy: CaseStudyData;
  className?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, className }) => {
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden rounded-xl transition-all duration-500 hover:shadow-elevation reveal-on-scroll",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={caseStudy.heroImage} 
          alt={caseStudy.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-wednesday-500 text-white text-xs font-medium py-1 px-2 rounded-full">
            {caseStudy.industry}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-wednesday-500 font-medium">
            {caseStudy.category}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-stone-800 line-clamp-2">
          {caseStudy.title}
        </h3>
        
        <p className="text-stone-600 mb-4 line-clamp-3">
          {caseStudy.subtitle}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.technologyStack.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="bg-stone-100 text-stone-600 text-xs py-1 px-2 rounded-md"
            >
              {tech}
            </span>
          ))}
          {caseStudy.technologyStack.length > 3 && (
            <span className="bg-stone-100 text-stone-600 text-xs py-1 px-2 rounded-md">
              +{caseStudy.technologyStack.length - 3}
            </span>
          )}
        </div>
        
        <Link
          to={`/case-studies/${caseStudy.slug}`}
          className="inline-flex items-center text-wednesday-500 font-medium transition-all hover:text-wednesday-600"
        >
          <span>{en.caseStudyHub.viewCaseStudy}</span>
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
