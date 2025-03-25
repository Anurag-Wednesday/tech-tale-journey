
import { en } from "@/translations/en";

export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  category: string;
  industry: string;
  technologyStack: string[];
  translations: any;
  slug: string;
}

export const caseStudies: CaseStudyData[] = [
  {
    id: "insuretech-global",
    title: en.insureTechCaseStudy.title,
    subtitle: en.insureTechCaseStudy.subtitle,
    heroImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Cloud Architecture",
    industry: "Insurance",
    technologyStack: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Microservices"],
    translations: en.insureTechCaseStudy,
    slug: "insuretech-cloud-transformation"
  },
  {
    id: "fashion-forward",
    title: en.ecommerceCaseStudy.title,
    subtitle: en.ecommerceCaseStudy.subtitle,
    heroImage: "https://images.unsplash.com/photo-1570554886111-e85eda79589a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Microservices",
    industry: "E-commerce",
    technologyStack: ["React", "AWS", "Kubernetes", "MongoDB", "Elasticsearch", "Kafka"],
    translations: en.ecommerceCaseStudy,
    slug: "ecommerce-microservices-transformation"
  }
];

// Helper function to get a case study by slug
export const getCaseStudyBySlug = (slug: string): CaseStudyData | undefined => {
  return caseStudies.find(caseStudy => caseStudy.slug === slug);
};

