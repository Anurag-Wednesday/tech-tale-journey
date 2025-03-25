
import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import SectionContainer from "./SectionContainer";
import MetricCard from "./MetricCard";
import TechnicalAccordion from "./TechnicalAccordion";
import DiagramWithCaption from "./DiagramWithCaption";
import Testimonial from "./Testimonial";
import { ArrowRight, Check } from "lucide-react";

const navigationItems = [
  { label: "Introduction", href: "#introduction" },
  { label: "Challenges", href: "#challenges" },
  { label: "Solution", href: "#solution" },
  { label: "Results", href: "#results" },
  { label: "Conclusion", href: "#conclusion" },
];

const CaseStudy = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation items={navigationItems} />

      <HeroSection
        title="Re-engineering Insurance Sales: 40% Faster Deployment with Cloud Automation"
        subtitle="How Wednesday Solutions transformed a leading insurance provider's sales platform through cloud architecture and DevOps innovation"
      />

      <SectionContainer
        id="introduction"
        title="Introduction"
        subtitle="The journey of modernizing a critical insurance sales platform"
      >
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-stone lg:prose-lg mx-auto">
            <p className="text-lg text-stone-700 mb-6 reveal-on-scroll">
              InsureTech Global, a Fortune 500 insurance provider serving over 5 million customers worldwide, faced significant challenges with their aging sales platform. As market competition intensified, they needed to rapidly innovate while ensuring compliance with strict regulatory requirements.
            </p>
            <p className="text-lg text-stone-700 mb-6 reveal-on-scroll">
              The company's legacy sales system, built over a decade ago, struggled to integrate with modern APIs and tools. Sales agents spent excessive time on manual processes, and deployment cycles took weeks, preventing rapid market response.
            </p>
            <p className="text-lg text-stone-700 reveal-on-scroll">
              Wednesday Solutions was engaged to reimagine the entire sales platform architecture with three clear objectives: accelerate time-to-market for new features, improve system reliability, and enhance the agent experience while maintaining strict compliance standards.
            </p>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="challenges" title="Challenges" className="bg-stone-100">
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {[
              "Legacy system with tightly coupled monolithic architecture hindered innovation and scaling",
              "Manual deployment processes resulted in 2-3 week release cycles and frequent production issues",
              "Complex integration with 15+ third-party systems and compliance requirements created development bottlenecks",
              "Limited visibility into system performance led to reactive troubleshooting and customer dissatisfaction",
              "Technical debt and outdated development practices negatively impacted team productivity and morale"
            ].map((challenge, index) => (
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
        title="Solution"
        subtitle="A strategic approach combining cloud architecture, automation, and DevOps practices"
      >
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-stone-700 text-center mb-12 reveal-on-scroll">
            Our team developed a comprehensive solution that reimagined the sales platform from the ground up, focusing on flexibility, performance, and user experience.
          </p>

          <DiagramWithCaption
            imageSrc="https://miro.medium.com/v2/resize:fit:1400/1*hk-vFk63vz0xRn9N3P4LBw.png"
            altText="High-level architecture diagram showing the microservices-based solution"
            caption="High-level architecture diagram illustrating the new cloud-based microservices architecture"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-6 rounded-xl reveal-on-scroll">
              <h3 className="text-xl font-semibold mb-4 text-stone-800">
                Cloud-Native Architecture
              </h3>
              <p className="text-stone-700">
                We transitioned from a monolithic application to a microservices architecture deployed on AWS, with containerization using Docker and Kubernetes for orchestration. This ensured better scalability, resilience, and isolated service deployments.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl reveal-on-scroll">
              <h3 className="text-xl font-semibold mb-4 text-stone-800">
                DevOps Transformation
              </h3>
              <p className="text-stone-700">
                Implemented CI/CD pipelines using Jenkins, GitHub Actions, and Terraform for infrastructure as code. This reduced deployment time from weeks to hours and improved code quality through automated testing and deployment processes.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl reveal-on-scroll">
              <h3 className="text-xl font-semibold mb-4 text-stone-800">
                Unified API Gateway
              </h3>
              <p className="text-stone-700">
                Developed a centralized API gateway using AWS API Gateway and custom middleware to streamline integration with both internal microservices and external third-party systems, simplifying the development experience.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl reveal-on-scroll">
              <h3 className="text-xl font-semibold mb-4 text-stone-800">
                Observability & Monitoring
              </h3>
              <p className="text-stone-700">
                Implemented comprehensive observability using ELK stack, Prometheus, and Grafana dashboards for real-time performance monitoring, alerting, and troubleshooting, leading to proactive issue detection.
              </p>
            </div>
          </div>

          <TechnicalAccordion title="Technical Deep Dive: Architecture & Implementation Details">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-3 text-stone-800">
                  Microservices Architecture
                </h4>
                <p className="text-stone-700 mb-4">
                  The monolithic application was decomposed into 12 domain-specific microservices, each with its own database and responsibility:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-stone-700">
                  <li>Quote Generation Service</li>
                  <li>Customer Profile Service</li>
                  <li>Policy Management Service</li>
                  <li>Billing & Payment Service</li>
                  <li>Claims Integration Service</li>
                  <li>Notification Service</li>
                  <li>Document Generation Service</li>
                  <li>Analytics Service</li>
                  <li>Agent Portal Backend</li>
                  <li>Admin Portal Backend</li>
                  <li>Authentication & Authorization Service</li>
                  <li>Compliance & Audit Service</li>
                </ul>
              </div>

              <DiagramWithCaption
                imageSrc="https://miro.medium.com/v2/resize:fit:1400/1*KTh3puTlI9_XK7Wbz2K-dA.png"
                altText="Detailed component diagram showing service interactions"
                caption="Detailed component diagram showing service interactions and data flow"
                className="my-8"
              />

              <div>
                <h4 className="text-lg font-medium mb-3 text-stone-800">
                  Data Management Strategy
                </h4>
                <p className="text-stone-700 mb-4">
                  We implemented a sophisticated data management approach:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-stone-700">
                  <li>Domain-specific databases (mixture of PostgreSQL, MongoDB, and Aurora)</li>
                  <li>Event-driven architecture with Kafka for cross-service communication</li>
                  <li>CQRS pattern for complex querying requirements</li>
                  <li>Data consistency maintained through saga pattern for distributed transactions</li>
                  <li>Real-time analytics pipeline using Kafka Streams and Elasticsearch</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-3 text-stone-800">
                  Infrastructure & Deployment
                </h4>
                <p className="text-stone-700 mb-4">
                  Our infrastructure setup leveraged AWS cloud services extensively:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-stone-700">
                  <li>EKS for Kubernetes orchestration</li>
                  <li>RDS and DynamoDB for relational and NoSQL data storage</li>
                  <li>S3 for document storage with CloudFront CDN</li>
                  <li>Lambda for event-driven serverless processing</li>
                  <li>WAF and Shield for security and DDoS protection</li>
                  <li>AWS CloudWatch and X-Ray for monitoring and tracing</li>
                </ul>
              </div>

              <pre className="bg-stone-800 text-white p-4 rounded-md overflow-x-auto text-sm">
{`// Infrastructure as Code example (Terraform)
resource "aws_eks_cluster" "production" {
  name     = "insurance-sales-platform"
  role_arn = aws_iam_role.eks_cluster.arn
  version  = "1.21"

  vpc_config {
    subnet_ids = var.subnet_ids
    security_group_ids = [aws_security_group.eks_cluster.id]
  }

  depends_on = [
    aws_iam_role_policy_attachment.eks_cluster_policy
  ]
}`}
              </pre>

              <div>
                <h4 className="text-lg font-medium mb-3 text-stone-800">
                  CI/CD Pipeline
                </h4>
                <p className="text-stone-700 mb-4">
                  The automated deployment pipeline included:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-stone-700">
                  <li>GitHub Actions for CI with branch protection rules</li>
                  <li>Automated testing (unit, integration, contract, and end-to-end)</li>
                  <li>Static code analysis and security scanning</li>
                  <li>Canary deployments for risk mitigation</li>
                  <li>Blue/green deployment strategy for zero-downtime updates</li>
                  <li>Infrastructure as Code with Terraform for environment consistency</li>
                </ul>
              </div>
            </div>
          </TechnicalAccordion>
        </div>
      </SectionContainer>

      <SectionContainer
        id="results"
        title="Results & Impact"
        subtitle="Measurable improvements across development, operations, and business metrics"
        className="bg-stone-100"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <MetricCard value="40%" label="Faster deployment cycles" />
          <MetricCard value="68%" label="Reduction in production incidents" />
          <MetricCard value="3x" label="Increase in feature delivery" />
          <MetricCard value="52%" label="Improvement in agent efficiency" />
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-stone-700 mb-6 reveal-on-scroll">
            The new architecture and processes delivered substantial business impact beyond just technical improvements. Sales agents reported significantly improved system responsiveness and reliability, leading to higher customer satisfaction scores and increased sales conversion rates.
          </p>
          <p className="text-lg text-stone-700 reveal-on-scroll">
            The development team's modernized workflow resulted in higher productivity and morale, reducing turnover and creating a culture of innovation. Most importantly, the business gained the agility to respond to market changes rapidly, launching new insurance products in days rather than months.
          </p>
        </div>

        <Testimonial
          quote="Wednesday Solutions transformed not just our platform, but our entire approach to technology. Their technical excellence, combined with a deep understanding of our business challenges, delivered results far beyond our expectations. We now have the agility and reliability we need to lead in our market."
          author="Sarah Johnson"
          role="CTO, InsureTech Global"
          className="max-w-3xl mx-auto"
        />
      </SectionContainer>

      <SectionContainer id="conclusion" title="Conclusion & Next Steps">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-stone lg:prose-lg mx-auto">
            <p className="text-lg text-stone-700 mb-6 reveal-on-scroll">
              Through strategic architecture modernization, DevOps transformation, and a focus on both technical excellence and business outcomes, Wednesday Solutions successfully transformed InsureTech Global's sales platform into a reliable, high-performance system that supports both current needs and future growth.
            </p>
            <p className="text-lg text-stone-700 mb-6 reveal-on-scroll">
              The project demonstrates how the right technical strategy can directly impact business performance, delivering measurable results in operational efficiency, customer experience, and market agility.
            </p>
            <p className="text-lg text-stone-700 mb-10 reveal-on-scroll">
              Building on this foundation, our team continues to partner with InsureTech Global on their technology roadmap, including AI-driven customer insights, enhanced mobile capabilities, and expansion of their integration ecosystem.
            </p>

            <div className="text-center reveal-on-scroll">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-wednesday-500 text-white rounded-lg font-medium transition-all duration-300 hover:bg-wednesday-600 hover:shadow-md"
              >
                <span>Talk to our experts</span>
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default CaseStudy;
