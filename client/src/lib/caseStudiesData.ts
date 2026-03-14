// Case Studies Data — Executive Blueprint Design System
// Deep navy (#1a2744), warm amber (#c8922a), off-white (#f8f6f1)

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  logo?: string;
  websiteUrl: string;
  websiteScreenshot: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  platform: string;
  duration: string;
  teamSize: string;
  role: string;
  year: string;
  tags: string[];
  color: string;
  accentColor: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "mars-mms",
    client: "MARS (M&M'S)",
    industry: "Consumer Goods / FMCG",
    websiteUrl: "https://www.mms.com",
    websiteScreenshot: "https://d2xsxph8kpxj0f.cloudfront.net/108203525/KPHR6hu3HL4KNWadjMGtVJ/mms_website_52c310c8.webp",
    tagline: "Global D2C Composable Commerce Transformation",
    overview:
      "Led the end-to-end architecture and delivery of a global D2C e-commerce platform for MARS (M&M'S), one of the world's most iconic confectionery brands. The project involved migrating from a legacy monolithic platform to a fully composable, MACH-based architecture powered by commercetools, enabling personalised gifting experiences at scale across multiple geographies.",
    challenge:
      "MARS needed to modernise their global M&M'S personalised gifting platform to support rapid feature delivery, multi-region expansion, and a seamless personalisation experience. The legacy monolith was unable to keep pace with seasonal demand spikes and lacked the flexibility for new product innovations like custom candy printing and corporate gifting.",
    solution:
      "Architected a headless, composable commerce solution using commercetools as the commerce engine, with a React-based storefront and microservices for personalisation, order management, and gifting workflows. Implemented event-driven architecture for real-time inventory and order processing, and integrated AI-powered product recommendations to increase average order value.",
    results: [
      "60% improvement in page load performance through headless architecture",
      "Successful multi-region rollout across US, UK, and APAC markets",
      "40% increase in personalised gifting conversion rates",
      "Seamless handling of 10x traffic spikes during holiday seasons",
      "Reduced time-to-market for new features from months to weeks",
    ],
    techStack: ["commercetools", "React.js", "Node.js", "GraphQL", "AWS", "Contentful", "Algolia", "Docker", "Kubernetes"],
    platform: "commercetools",
    duration: "18 months",
    teamSize: "12 engineers",
    role: "Solution Architect & Practice Head",
    year: "2022–2023",
    tags: ["MACH", "D2C", "Personalisation", "Composable Commerce", "Multi-region"],
    color: "#f5c518",
    accentColor: "#e31c25",
  },
  {
    id: "breville",
    client: "Breville",
    industry: "Kitchen Appliances / Consumer Electronics",
    websiteUrl: "https://www.breville.com/en-us",
    websiteScreenshot: "https://d2xsxph8kpxj0f.cloudfront.net/108203525/KPHR6hu3HL4KNWadjMGtVJ/breville_website_b09ba60d.webp",
    tagline: "Global B2C Commerce Platform on commercetools & AWS",
    overview:
      "Delivered a global B2C commerce platform for Breville, a premium kitchen appliance brand operating across 50+ countries. The engagement involved migrating from an aging SAP Hybris platform to a modern composable commerce stack on commercetools, enabling Breville to launch new storefronts rapidly and deliver a premium digital experience consistent with their brand positioning.",
    challenge:
      "Breville's existing SAP Hybris platform was costly to maintain, slow to deploy, and unable to support their aggressive global expansion plans. The brand needed a platform that could handle complex product configurations, multi-currency pricing, and localised content across 50+ regional storefronts without requiring separate deployments for each market.",
    solution:
      "Designed and implemented a composable commerce architecture with commercetools as the commerce backbone, AWS for cloud infrastructure, and a headless React storefront. Introduced a centralised product information management (PIM) layer, a multi-region content strategy using Contentful, and automated CI/CD pipelines for rapid storefront deployment across new markets.",
    results: [
      "Reduced storefront deployment time from 6 months to 3 weeks per new market",
      "50+ regional storefronts managed from a single commerce platform",
      "35% reduction in total cost of ownership vs SAP Hybris",
      "99.99% uptime during peak sales events (Black Friday, Prime Day)",
      "Improved SEO performance with headless SSR architecture",
    ],
    techStack: ["commercetools", "React.js", "AWS", "Contentful", "Algolia", "Pimcore", "GraphQL", "Terraform", "CI/CD"],
    platform: "commercetools + AWS",
    duration: "24 months",
    teamSize: "15 engineers",
    role: "Enterprise Architect & Delivery Lead",
    year: "2021–2023",
    tags: ["Global Commerce", "Multi-region", "Headless", "SAP Migration", "B2C"],
    color: "#c8922a",
    accentColor: "#1a2744",
  },
  {
    id: "dr-reddys",
    client: "Dr. Reddy's Laboratories",
    industry: "Pharmaceuticals / Healthcare",
    websiteUrl: "https://www.drreddys.com",
    websiteScreenshot: "https://d2xsxph8kpxj0f.cloudfront.net/108203525/KPHR6hu3HL4KNWadjMGtVJ/drreddys_website_53571334.webp",
    tagline: "B2B Pharma Commerce Platform on commercetools & GCP",
    overview:
      "Architected and delivered a B2B digital commerce platform for Dr. Reddy's Laboratories, one of India's largest pharmaceutical companies. The platform enables B2B ordering for distributors, hospitals, and healthcare institutions across India and international markets, built on commercetools with Google Cloud Platform as the cloud infrastructure.",
    challenge:
      "Dr. Reddy's needed to digitise their complex B2B ordering process, which was largely manual and phone/email-based. The platform needed to handle pharmaceutical-specific requirements including regulatory compliance, controlled substance ordering workflows, tiered pricing for different distributor categories, and integration with SAP ERP for order fulfilment.",
    solution:
      "Designed a B2B commerce architecture on commercetools with custom extensions for pharmaceutical ordering workflows, regulatory compliance checks, and tiered pricing models. Integrated with SAP ERP via GCP Pub/Sub for real-time order synchronisation, and implemented a role-based access control system for distributor hierarchy management.",
    results: [
      "80% reduction in manual order processing time",
      "Onboarded 2,000+ B2B distributors within 6 months of launch",
      "Full SAP ERP integration with real-time order sync",
      "Regulatory compliance workflows for controlled substances",
      "Expanded to 3 international markets within 12 months",
    ],
    techStack: ["commercetools", "Google Cloud Platform", "GCP Pub/Sub", "SAP ERP", "React.js", "Node.js", "GraphQL", "BigQuery"],
    platform: "commercetools + GCP",
    duration: "20 months",
    teamSize: "10 engineers",
    role: "Solution Architect",
    year: "2020–2022",
    tags: ["B2B Commerce", "Pharma", "ERP Integration", "GCP", "Compliance"],
    color: "#2e7d32",
    accentColor: "#1a2744",
  },
  {
    id: "jsw-steel",
    client: "JSW Steel",
    industry: "Manufacturing / Steel",
    websiteUrl: "https://www.jswsteel.in",
    websiteScreenshot: "https://d2xsxph8kpxj0f.cloudfront.net/108203525/KPHR6hu3HL4KNWadjMGtVJ/jsw_website_60fc2e5d.webp",
    tagline: "B2B Steel Commerce & Digital Marketplace",
    overview:
      "Led the architecture and delivery of a B2B digital commerce and marketplace platform for JSW Steel, India's largest integrated steel producer with a capacity of 35.7 MTPA. The platform enables steel buyers — including construction companies, automotive manufacturers, and industrial buyers — to browse, configure, and order steel products digitally, replacing a traditionally relationship-driven sales process.",
    challenge:
      "JSW Steel's sales process was entirely offline, relying on a network of distributors and direct sales teams. They needed a digital platform that could handle complex product configurations (grade, thickness, dimensions, quantity), bulk pricing, credit management for large industrial buyers, and integration with their manufacturing and logistics systems.",
    solution:
      "Architected a composable B2B marketplace on commercetools with custom product configuration engines for steel specifications, bulk order management, and dynamic pricing based on buyer tier and volume. Integrated with JSW's SAP ERP and logistics systems for real-time inventory, production scheduling, and delivery tracking.",
    results: [
      "First-ever digital B2B ordering platform for India's largest steel producer",
      "3,000+ industrial buyers onboarded in the first year",
      "Complex steel product configurator with 500+ SKU variants",
      "Real-time integration with SAP ERP and logistics systems",
      "40% reduction in order processing cycle time",
    ],
    techStack: ["commercetools", "React.js", "SAP ERP", "Node.js", "GraphQL", "AWS", "Elasticsearch", "Docker"],
    platform: "commercetools",
    duration: "16 months",
    teamSize: "8 engineers",
    role: "Solution Architect & Technical Lead",
    year: "2021–2022",
    tags: ["B2B Marketplace", "Manufacturing", "ERP Integration", "Product Configurator"],
    color: "#1565c0",
    accentColor: "#c8922a",
  },
  {
    id: "omega-engineering",
    client: "Omega Engineering",
    industry: "Industrial Instrumentation",
    websiteUrl: "https://www.dwyeromega.com",
    websiteScreenshot: "https://d2xsxph8kpxj0f.cloudfront.net/108203525/KPHR6hu3HL4KNWadjMGtVJ/omega_website_c98da271.webp",
    tagline: "SAP Commerce Cloud B2B Platform Modernisation",
    overview:
      "Delivered a comprehensive SAP Commerce Cloud implementation for Omega Engineering (now DwyerOmega), a leading provider of industrial sensing, monitoring, and control solutions. The project involved migrating from a legacy e-commerce platform to SAP Commerce Cloud, with a focus on complex B2B ordering, product configurators for industrial instruments, and multi-channel sales.",
    challenge:
      "Omega Engineering's legacy platform was unable to support their complex product catalogue of 100,000+ industrial instruments with configurable specifications. The platform needed to handle B2B account management, punch-out ordering for enterprise procurement systems, and real-time inventory across multiple warehouses.",
    solution:
      "Implemented SAP Commerce Cloud with custom product configurators for industrial instruments, B2B account management with approval workflows, OCI/cXML punch-out integration for enterprise procurement, and real-time inventory management across multiple distribution centres. Developed a guided selling tool to help engineers find the right instrument for their application.",
    results: [
      "100,000+ product catalogue migrated with full configurability",
      "B2B punch-out integration with 50+ enterprise procurement systems",
      "Guided selling tool reduced product selection time by 70%",
      "Multi-warehouse real-time inventory management",
      "30% increase in online order volume within 6 months",
    ],
    techStack: ["SAP Commerce Cloud", "SAP Hybris", "Java", "Spring MVC", "Oracle DB", "Apache Solr", "REST APIs", "OCI/cXML"],
    platform: "SAP Commerce Cloud",
    duration: "18 months",
    teamSize: "10 engineers",
    role: "Lead Solution Architect",
    year: "2018–2020",
    tags: ["SAP Commerce", "B2B", "Product Configurator", "Punch-out", "Industrial"],
    color: "#6a1b9a",
    accentColor: "#c8922a",
  },
  {
    id: "1800-flowers",
    client: "1-800-Flowers",
    industry: "Gifting / Floral Retail",
    websiteUrl: "https://www.1800flowers.com",
    websiteScreenshot: "https://d2xsxph8kpxj0f.cloudfront.net/108203525/KPHR6hu3HL4KNWadjMGtVJ/flowers_website_87544bba.webp",
    tagline: "High-Performance Gifting Platform Engineering",
    overview:
      "Contributed to the engineering and architecture of 1-800-Flowers' e-commerce platform, one of the largest gifting and floral delivery platforms in the United States. The engagement focused on platform performance optimisation, scalability for peak holiday seasons, and the development of new gifting features including same-day delivery scheduling and personalised gifting recommendations.",
    challenge:
      "1-800-Flowers experienced severe performance degradation during peak gifting seasons (Valentine's Day, Mother's Day, Christmas), with the platform struggling to handle 50x normal traffic volumes. The existing Java/J2EE architecture needed significant optimisation and the introduction of caching, CDN strategies, and asynchronous processing to handle peak loads.",
    solution:
      "Redesigned the platform's caching architecture, implemented a multi-tier CDN strategy, and introduced asynchronous order processing using message queues. Developed a same-day delivery scheduling engine with real-time florist capacity management, and built personalised gifting recommendation features using collaborative filtering algorithms.",
    results: [
      "Platform successfully handled 50x traffic spikes during Valentine's Day",
      "99.9% uptime during peak holiday seasons",
      "Same-day delivery scheduling engine with real-time capacity management",
      "35% improvement in page load times through CDN and caching optimisation",
      "Personalised recommendations increased average order value by 22%",
    ],
    techStack: ["Java / J2EE", "Spring MVC", "Oracle DB", "Apache Solr", "CDN", "Message Queues", "REST APIs", "HTML5 / CSS3"],
    platform: "Java / J2EE",
    duration: "12 months",
    teamSize: "8 engineers",
    role: "Senior Java Developer & Technical Lead",
    year: "2012–2013",
    tags: ["High Performance", "Scalability", "Gifting", "Personalisation", "Peak Traffic"],
    color: "#e91e63",
    accentColor: "#1a2744",
  },
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find((cs) => cs.id === id);
};
