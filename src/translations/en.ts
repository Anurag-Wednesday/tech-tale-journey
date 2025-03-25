
// English translations
export const en = {
  common: {
    cta: "Talk to our experts",
  },
  caseStudyHub: {
    title: "Case Studies",
    subtitle: "Explore our success stories and technical achievements",
    viewCaseStudy: "View Case Study",
  },
  insureTechCaseStudy: {
    title: "Re-engineering Insurance Sales: 40% Faster Deployment with Cloud Automation",
    subtitle: "How Wednesday Solutions transformed a leading insurance provider's sales platform through cloud architecture and DevOps innovation",
    navigation: {
      introduction: "Introduction",
      challenges: "Challenges",
      solution: "Solution",
      results: "Results",
      conclusion: "Conclusion",
    },
    sections: {
      introduction: {
        title: "Introduction",
        subtitle: "The journey of modernizing a critical insurance sales platform",
        content: [
          "InsureTech Global, a Fortune 500 insurance provider serving over 5 million customers worldwide, faced significant challenges with their aging sales platform. As market competition intensified, they needed to rapidly innovate while ensuring compliance with strict regulatory requirements.",
          "The company's legacy sales system, built over a decade ago, struggled to integrate with modern APIs and tools. Sales agents spent excessive time on manual processes, and deployment cycles took weeks, preventing rapid market response.",
          "Wednesday Solutions was engaged to reimagine the entire sales platform architecture with three clear objectives: accelerate time-to-market for new features, improve system reliability, and enhance the agent experience while maintaining strict compliance standards.",
        ],
      },
      challenges: {
        title: "Challenges",
        items: [
          "Legacy system with tightly coupled monolithic architecture hindered innovation and scaling",
          "Manual deployment processes resulted in 2-3 week release cycles and frequent production issues",
          "Complex integration with 15+ third-party systems and compliance requirements created development bottlenecks",
          "Limited visibility into system performance led to reactive troubleshooting and customer dissatisfaction",
          "Technical debt and outdated development practices negatively impacted team productivity and morale",
        ],
      },
      solution: {
        title: "Solution",
        subtitle: "A strategic approach combining cloud architecture, automation, and DevOps practices",
        overview: "Our team developed a comprehensive solution that reimagined the sales platform from the ground up, focusing on flexibility, performance, and user experience.",
        diagram: {
          src: "https://miro.medium.com/v2/resize:fit:1400/1*hk-vFk63vz0xRn9N3P4LBw.png",
          alt: "High-level architecture diagram showing the microservices-based solution",
          caption: "High-level architecture diagram illustrating the new cloud-based microservices architecture",
        },
        approaches: [
          {
            title: "Cloud-Native Architecture",
            description: "We transitioned from a monolithic application to a microservices architecture deployed on AWS, with containerization using Docker and Kubernetes for orchestration. This ensured better scalability, resilience, and isolated service deployments.",
          },
          {
            title: "DevOps Transformation",
            description: "Implemented CI/CD pipelines using Jenkins, GitHub Actions, and Terraform for infrastructure as code. This reduced deployment time from weeks to hours and improved code quality through automated testing and deployment processes.",
          },
          {
            title: "Unified API Gateway",
            description: "Developed a centralized API gateway using AWS API Gateway and custom middleware to streamline integration with both internal microservices and external third-party systems, simplifying the development experience.",
          },
          {
            title: "Observability & Monitoring",
            description: "Implemented comprehensive observability using ELK stack, Prometheus, and Grafana dashboards for real-time performance monitoring, alerting, and troubleshooting, leading to proactive issue detection.",
          },
        ],
        technicalDeepDive: {
          title: "Technical Deep Dive: Architecture & Implementation Details",
          architecture: {
            title: "Microservices Architecture",
            description: "The monolithic application was decomposed into 12 domain-specific microservices, each with its own database and responsibility:",
            services: [
              "Quote Generation Service",
              "Customer Profile Service",
              "Policy Management Service",
              "Billing & Payment Service",
              "Claims Integration Service",
              "Notification Service",
              "Document Generation Service",
              "Analytics Service",
              "Agent Portal Backend",
              "Admin Portal Backend",
              "Authentication & Authorization Service",
              "Compliance & Audit Service",
            ],
          },
          detailedDiagram: {
            src: "https://miro.medium.com/v2/resize:fit:1400/1*KTh3puTlI9_XK7Wbz2K-dA.png",
            alt: "Detailed component diagram showing service interactions",
            caption: "Detailed component diagram showing service interactions and data flow",
          },
          dataManagement: {
            title: "Data Management Strategy",
            description: "We implemented a sophisticated data management approach:",
            items: [
              "Domain-specific databases (mixture of PostgreSQL, MongoDB, and Aurora)",
              "Event-driven architecture with Kafka for cross-service communication",
              "CQRS pattern for complex querying requirements",
              "Data consistency maintained through saga pattern for distributed transactions",
              "Real-time analytics pipeline using Kafka Streams and Elasticsearch",
            ],
          },
          infrastructure: {
            title: "Infrastructure & Deployment",
            description: "Our infrastructure setup leveraged AWS cloud services extensively:",
            items: [
              "EKS for Kubernetes orchestration",
              "RDS and DynamoDB for relational and NoSQL data storage",
              "S3 for document storage with CloudFront CDN",
              "Lambda for event-driven serverless processing",
              "WAF and Shield for security and DDoS protection",
              "AWS CloudWatch and X-Ray for monitoring and tracing",
            ],
          },
          codeExample: `// Infrastructure as Code example (Terraform)
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
}`,
          cicd: {
            title: "CI/CD Pipeline",
            description: "The automated deployment pipeline included:",
            items: [
              "GitHub Actions for CI with branch protection rules",
              "Automated testing (unit, integration, contract, and end-to-end)",
              "Static code analysis and security scanning",
              "Canary deployments for risk mitigation",
              "Blue/green deployment strategy for zero-downtime updates",
              "Infrastructure as Code with Terraform for environment consistency",
            ],
          },
        },
      },
      results: {
        title: "Results & Impact",
        subtitle: "Measurable improvements across development, operations, and business metrics",
        metrics: [
          { value: "40%", label: "Faster deployment cycles" },
          { value: "68%", label: "Reduction in production incidents" },
          { value: "3x", label: "Increase in feature delivery" },
          { value: "52%", label: "Improvement in agent efficiency" },
        ],
        impact: [
          "The new architecture and processes delivered substantial business impact beyond just technical improvements. Sales agents reported significantly improved system responsiveness and reliability, leading to higher customer satisfaction scores and increased sales conversion rates.",
          "The development team's modernized workflow resulted in higher productivity and morale, reducing turnover and creating a culture of innovation. Most importantly, the business gained the agility to respond to market changes rapidly, launching new insurance products in days rather than months.",
        ],
        testimonial: {
          quote: "Wednesday Solutions transformed not just our platform, but our entire approach to technology. Their technical excellence, combined with a deep understanding of our business challenges, delivered results far beyond our expectations. We now have the agility and reliability we need to lead in our market.",
          author: "Sarah Johnson",
          role: "CTO, InsureTech Global",
        },
      },
      conclusion: {
        title: "Conclusion & Next Steps",
        content: [
          "Through strategic architecture modernization, DevOps transformation, and a focus on both technical excellence and business outcomes, Wednesday Solutions successfully transformed InsureTech Global's sales platform into a reliable, high-performance system that supports both current needs and future growth.",
          "The project demonstrates how the right technical strategy can directly impact business performance, delivering measurable results in operational efficiency, customer experience, and market agility.",
          "Building on this foundation, our team continues to partner with InsureTech Global on their technology roadmap, including AI-driven customer insights, enhanced mobile capabilities, and expansion of their integration ecosystem.",
        ],
      },
    }
  },
  ecommerceCaseStudy: {
    title: "From Monolith to Microservices: Scaling an E-commerce Platform for 10x Growth",
    subtitle: "How Wednesday Solutions transformed an online retailer's architecture to support rapid expansion",
    navigation: {
      introduction: "Introduction",
      challenges: "Challenges",
      solution: "Solution",
      results: "Results",
      conclusion: "Conclusion",
    },
    sections: {
      introduction: {
        title: "Introduction",
        subtitle: "Preparing an e-commerce platform for hypergrowth",
        content: [
          "FashionForward, a rapidly growing online fashion retailer, was experiencing exponential growth that their existing monolithic platform couldn't handle. With plans to expand into new markets and the holiday season approaching, they needed a scalable solution—fast.",
          "Their legacy e-commerce platform, built initially for a limited product catalog, was struggling under increased traffic and an expanding inventory of over 50,000 products. Page load times had increased to unacceptable levels, and checkout failures were becoming common during peak hours.",
          "Wednesday Solutions was brought in to re-architect the platform within a tight three-month timeframe while ensuring zero downtime during the transition, as the business couldn't afford any interruption to their operations.",
        ],
      },
      challenges: {
        title: "Challenges",
        items: [
          "Monolithic architecture that couldn't scale to handle 200,000+ daily active users",
          "Slow page load times (8+ seconds) resulting in significant customer abandonment",
          "Inventory management system unable to handle real-time updates across multiple warehouses",
          "Payment processing bottlenecks during high-traffic periods causing lost sales",
          "Technical debt resulting in 2-4 week development cycles for even minor features",
        ],
      },
      solution: {
        title: "Solution",
        subtitle: "A phased migration to microservices with continuous delivery",
        overview: "Our team implemented a strategic, phased migration to a microservices architecture that allowed FashionForward to scale while maintaining business continuity.",
        diagram: {
          src: "https://miro.medium.com/v2/resize:fit:1400/1*hk-vFk63vz0xRn9N3P4LBw.png",
          alt: "High-level e-commerce microservices architecture",
          caption: "High-level architecture showing the decomposition of the e-commerce platform into microservices",
        },
        approaches: [
          {
            title: "Strangler Pattern Implementation",
            description: "Instead of a risky rewrite, we employed the strangler pattern to gradually replace components of the monolith with microservices, starting with the most critical bottlenecks: inventory, catalog, and checkout services.",
          },
          {
            title: "React Microfrontends",
            description: "Implemented a microfrontend architecture using React and Module Federation, allowing teams to work independently on different sections of the user interface while maintaining a consistent user experience.",
          },
          {
            title: "Elastic Infrastructure",
            description: "Deployed the new services on AWS using auto-scaling groups and Kubernetes, enabling the platform to automatically scale up during peak shopping hours and scale down during quieter periods.",
          },
          {
            title: "Caching Strategy",
            description: "Implemented a multi-layered caching solution with Redis and CloudFront CDN, dramatically reducing database load and improving page load times across global markets.",
          },
        ],
        technicalDeepDive: {
          title: "Technical Deep Dive: Architecture & Implementation Details",
          architecture: {
            title: "Microservices Architecture",
            description: "The platform was decomposed into domain-driven microservices:",
            services: [
              "Product Catalog Service",
              "Inventory Management Service",
              "User Profile Service",
              "Cart Service",
              "Order Processing Service",
              "Payment Gateway Service",
              "Shipping Service",
              "Reviews & Ratings Service",
              "Search Service",
              "Recommendations Engine",
              "Analytics Service",
              "Notification Service",
            ],
          },
          detailedDiagram: {
            src: "https://miro.medium.com/v2/resize:fit:1400/1*KTh3puTlI9_XK7Wbz2K-dA.png",
            alt: "Detailed component diagram for e-commerce platform",
            caption: "Detailed component diagram showing service interactions and data flow in the new architecture",
          },
          dataManagement: {
            title: "Data Management Strategy",
            description: "Our data strategy emphasized performance and consistency:",
            items: [
              "Polyglot persistence with MongoDB for catalog and PostgreSQL for transactions",
              "Elasticsearch for high-performance product search and filtering",
              "Event sourcing with Kafka for inventory updates across services",
              "Redis for session management and real-time inventory counts",
              "Data synchronization services to maintain consistency across databases",
            ],
          },
          infrastructure: {
            title: "Infrastructure & Deployment",
            description: "The infrastructure was designed for global scale:",
            items: [
              "Multi-region AWS deployment with active-active configuration",
              "Global load balancing with AWS Global Accelerator",
              "CloudFront CDN for static assets and edge caching",
              "Auto-scaling groups for each microservice with custom scaling policies",
              "Containerization with Docker and ECS for consistent deployments",
              "Infrastructure as Code using Terraform and AWS CDK",
            ],
          },
          codeExample: `// React Microfrontend Configuration
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "productDetail",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductDetailView": "./src/components/ProductDetailView",
      },
      shared: {
        ...dependencies,
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
};`,
          cicd: {
            title: "CI/CD Pipeline",
            description: "Continuous delivery was implemented with:",
            items: [
              "Feature flags for safe production deployments",
              "Automated testing pipeline with 90% code coverage requirement",
              "Canary deployments for new services",
              "Automated performance testing and load testing",
              "Chaos engineering practices to ensure resilience",
              "Zero-downtime deployment strategies",
            ],
          },
        },
      },
      results: {
        title: "Results & Impact",
        subtitle: "Dramatic improvements in performance, scalability, and business metrics",
        metrics: [
          { value: "300ms", label: "Average page load time (from 8s)" },
          { value: "99.99%", label: "Platform uptime during peak events" },
          { value: "10x", label: "Traffic scaling with no performance degradation" },
          { value: "42%", label: "Increase in conversion rate" },
        ],
        impact: [
          "The re-architected platform allowed FashionForward to handle their Black Friday sale with zero downtime, processing 15x their normal order volume with consistent sub-second response times.",
          "Development velocity increased dramatically, with new features going from concept to production in days rather than weeks. This enabled the business to rapidly experiment with new shopping experiences and quickly respond to market trends.",
        ],
        testimonial: {
          quote: "The transformation Wednesday Solutions delivered didn't just solve our technical problems—it changed our entire business trajectory. We're now able to enter new markets in weeks, experiment rapidly, and deliver the exceptional customer experience our brand is known for, even during peak traffic events that would have crashed our old system.",
          author: "Michael Chen",
          role: "CEO, FashionForward",
        },
      },
      conclusion: {
        title: "Conclusion & Next Steps",
        content: [
          "The successful migration from monolith to microservices enabled FashionForward to not only handle their immediate growth challenges but positioned them for continued expansion across global markets.",
          "Beyond the technical achievements, the project transformed how the business approaches technology, with cross-functional teams now collaborating closely on feature development and a culture of continuous improvement.",
          "Following this success, our partnership with FashionForward continues as we implement their personalization engine, international payment systems, and machine learning-based demand forecasting to further accelerate their growth trajectory.",
        ],
      },
    }
  }
};

