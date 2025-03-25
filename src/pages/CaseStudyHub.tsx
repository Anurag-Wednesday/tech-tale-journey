
import React from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import SectionContainer from "@/components/SectionContainer";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";
import { en } from "@/translations/en";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const CaseStudyHub: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation items={navigationItems} />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 md:px-8 bg-stone-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-stone-900 reveal-on-scroll">
              {en.caseStudyHub.title}
            </h1>
            <p className="text-xl text-stone-600 reveal-on-scroll">
              {en.caseStudyHub.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHub;
