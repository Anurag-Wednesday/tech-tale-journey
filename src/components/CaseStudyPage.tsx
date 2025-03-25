
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import SectionContainer from "./SectionContainer";
import MetricCard from "./MetricCard";
import TechnicalAccordion from "./TechnicalAccordion";
import DiagramWithCaption from "./DiagramWithCaption";
import Testimonial from "./Testimonial";
import { ArrowRight, Check } from "lucide-react";
import { getCaseStudyBySlug } from "@/data/caseStudies";
import { en } from "@/translations/en";

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = getCaseStudyBySlug(slug || "");

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  const { translations: t } = caseStudy;
  const navigationItems = Object.entries(t.navigation).map(([key, value]) => ({
    label: value as string,
    href: `#${key}`,
  }));

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation items={navigationItems} />

      <HeroSection
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
      />

      <SectionContainer
        id="introduction"
        title={t.sections.introduction.title}
        subtitle={t.sections.introduction.subtitle}
      >
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-stone lg:prose-lg mx-auto">
            {t.sections.introduction.content.map((paragraph: string, index: number) => (
              <p key={index} className="text-lg text-stone-700 mb-6 reveal-on-scroll">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="challenges" title={t.sections.challenges.title} className="bg-stone-100">
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {t.sections.challenges.items.map((challenge: string, index: number) => (
              <li 
                key={index}
                className="flex items-start gap-3 reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mt-1 bg-wednesday-500 rounded-full p-1 text-white">
                  <Check size={16} />
                </div>
                <p className="text-lg text-stone-700">{challenge}</p>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>

      <SectionContainer
        id="solution"
        title={t.sections.solution.title}
        subtitle={t.sections.solution.subtitle}
      >
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-stone-700 text-center mb-12 reveal-on-scroll">
            {t.sections.solution.overview}
          </p>

          <DiagramWithCaption
            imageSrc={t.sections.solution.diagram.src}
            altText={t.sections.solution.diagram.alt}
            caption={t.sections.solution.diagram.caption}
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {t.sections.solution.approaches.map((approach: any, index: number) => (
              <div key={index} className="glass-card p-6 rounded-xl reveal-on-scroll">
                <h3 className="text-xl font-semibold mb-4 text-stone-800">
                  {approach.title}
                </h3>
                <p className="text-stone-700">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>

          <TechnicalAccordion title={t.sections.solution.technicalDeepDive.title}>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-3 text-stone-800">
                  {t.sections.solution.technicalDeepDive.architecture.title}
                </h4>
                <p className="text-stone-700 mb-4">
                  {t.sections.solution.technicalDeepDive.architecture.description}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-stone-700">
                  {t.sections.solution.technicalDeepDive.architecture.services.map((service: string, index: number) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>

              <DiagramWithCaption
                imageSrc={t.sections.solution.technicalDeepDive.detailedDiagram.src}
                altText={t.sections.solution.technicalDeepDive.detailedDiagram.alt}
                caption={t.sections.solution.technicalDeepDive.detailedDiagram.caption}
                className="my-8"
              />

              <div>
                <h4 className="text-lg font-medium mb-3 text-stone-800">
                  {t.sections.solution.technicalDeepDive.dataManagement.title}
                </h4>
                <p className="text-stone-700 mb-4">
                  {t.sections.solution.technicalDeepDive.dataManagement.description}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-stone-700">
                  {t.sections.solution.technicalDeepDive.dataManagement.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-3 text-stone-800">
                  {t.sections.solution.technicalDeepDive.infrastructure.title}
                </h4>
                <p className="text-stone-700 mb-4">
                  {t.sections.solution.technicalDeepDive.infrastructure.description}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-stone-700">
                  {t.sections.solution.technicalDeepDive.infrastructure.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <pre className="bg-stone-800 text-white p-4 rounded-md overflow-x-auto text-sm">
                {t.sections.solution.technicalDeepDive.codeExample}
              </pre>

              <div>
                <h4 className="text-lg font-medium mb-3 text-stone-800">
                  {t.sections.solution.technicalDeepDive.cicd.title}
                </h4>
                <p className="text-stone-700 mb-4">
                  {t.sections.solution.technicalDeepDive.cicd.description}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-stone-700">
                  {t.sections.solution.technicalDeepDive.cicd.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </TechnicalAccordion>
        </div>
      </SectionContainer>

      <SectionContainer
        id="results"
        title={t.sections.results.title}
        subtitle={t.sections.results.subtitle}
        className="bg-stone-100"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.sections.results.metrics.map((metric: any, index: number) => (
            <MetricCard
              key={index}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          {t.sections.results.impact.map((paragraph: string, index: number) => (
            <p key={index} className="text-lg text-stone-700 mb-6 reveal-on-scroll">
              {paragraph}
            </p>
          ))}
        </div>

        <Testimonial
          quote={t.sections.results.testimonial.quote}
          author={t.sections.results.testimonial.author}
          role={t.sections.results.testimonial.role}
          className="max-w-3xl mx-auto"
        />
      </SectionContainer>

      <SectionContainer id="conclusion" title={t.sections.conclusion.title}>
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-stone lg:prose-lg mx-auto">
            {t.sections.conclusion.content.map((paragraph: string, index: number) => (
              <p key={index} className="text-lg text-stone-700 mb-6 reveal-on-scroll">
                {paragraph}
              </p>
            ))}

            <div className="text-center reveal-on-scroll">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-wednesday-500 text-white rounded-lg font-medium transition-all duration-300 hover:bg-wednesday-600 hover:shadow-md"
              >
                <span>{en.common.cta}</span>
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default CaseStudyPage;
