
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
  },
  {
    id: "fintech-revolution",
    title: "FinTech Revolution: Modern Banking Platform",
    subtitle: "How we transformed a traditional bank into a digital-first financial institution",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Digital Transformation",
    industry: "Financial Services",
    technologyStack: ["React Native", "Node.js", "GraphQL", "PostgreSQL", "Docker", "Azure"],
    translations: en.insureTechCaseStudy, // Reusing existing translations for demo purposes
    slug: "fintech-revolution-banking-platform"
  },
  {
    id: "healthcare-ai",
    title: "AI-Powered Healthcare Analytics",
    subtitle: "Implementing machine learning to improve patient outcomes and operational efficiency",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "AI & Machine Learning",
    industry: "Healthcare",
    technologyStack: ["Python", "TensorFlow", "AWS SageMaker", "Snowflake", "React", "FastAPI"],
    translations: en.ecommerceCaseStudy, // Reusing existing translations for demo purposes
    slug: "healthcare-ai-analytics-platform"
  },
  {
    id: "edutech-platform",
    title: "EdTech Learning Platform Redesign",
    subtitle: "Creating an engaging digital classroom experience for remote learning",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "UX/UI Design & Development",
    industry: "Education",
    technologyStack: ["Next.js", "Firebase", "WebRTC", "Redux", "Material UI", "Node.js"],
    translations: en.insureTechCaseStudy, // Reusing existing translations for demo purposes
    slug: "edutech-learning-platform-redesign"
  },
  {
    id: "iot-industrial",
    title: "Industrial IoT Monitoring System",
    subtitle: "Connecting factory floor equipment for real-time performance monitoring",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "IoT & Edge Computing",
    industry: "Manufacturing",
    technologyStack: ["Raspberry Pi", "MQTT", "Node-RED", "InfluxDB", "Grafana", "Angular"],
    translations: en.ecommerceCaseStudy, // Reusing existing translations for demo purposes
    slug: "iot-industrial-monitoring-system"
  }
];

// Helper function to get a case study by slug
export const getCaseStudyBySlug = (slug: string): CaseStudyData | undefined => {
  return caseStudies.find(caseStudy => caseStudy.slug === slug);
};
