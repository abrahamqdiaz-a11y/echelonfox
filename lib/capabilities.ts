/** Existing service URLs are retained; the diagnosis determines which capabilities are useful. */
export type Capability = {
  slug:
    | "commercial-diagnosis"
    | "customer-acquisition"
    | "sales-process-crm"
    | "technology-operations"
    | "ai-automation"
    | "websites-digital-infrastructure";
  name: string;
  short: string;
  headline: string;
  summary: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  signs: string[];
  includes: { heading: string; items: string[] }[];
  connects: string;
  cta: string;
  cases: string[];
};
export const capabilities: Capability[] = [
  {
    slug: "commercial-diagnosis",
    name: "Growth Strategy & Business Advisory",
    short: "Growth strategy",
    headline: "Better decisions start with a clearer picture of your business.",
    summary:
      "Understand what is holding the business back, identify the opportunities worth pursuing and build a practical way forward.",
    metaTitle: "Growth Strategy & Business Advisory",
    metaDescription:
      "Business assessments, positioning and growth planning. Identify commercial bottlenecks and prioritise practical improvements across your business.",
    intro:
      "It is easy to invest in a familiar solution before understanding the problem. A new campaign, website or CRM can be valuable — when it addresses the constraint that matters. We look at the business as a whole before deciding what should change.",
    signs: [
      "Growth has slowed, but the reason is unclear.",
      "Your positioning no longer reflects the value you offer.",
      "You are considering an investment and want a clearer view of the priorities.",
    ],
    includes: [
      {
        heading: "Understand the commercial picture",
        items: [
          "Business model and commercial assessment",
          "Customer acquisition and conversion analysis",
          "Customer journey and market positioning",
        ],
      },
      {
        heading: "Find the constraint",
        items: [
          "Growth bottleneck identification",
          "Process and operational review",
          "Review of existing systems, data and capacity",
        ],
      },
      {
        heading: "Decide what comes next",
        items: [
          "Opportunity prioritisation",
          "Practical growth planning",
          "An execution roadmap shaped around the business",
        ],
      },
    ],
    connects:
      "A strategic engagement might involve conversations with the people doing the work, a review of available sales and customer data, and a closer look at where the customer journey slows down. The scope depends on the questions that need answering; there is no fixed package of deliverables.",
    cta: "Discuss Your Growth Challenges",
    cases: ["beauty-supply-retailer-maryland"],
  },
  {
    slug: "customer-acquisition",
    name: "Marketing & Customer Acquisition",
    short: "Customer acquisition",
    headline: "Reach the right customers. Give them a reason to choose you.",
    summary:
      "Build visibility, demand and a clearer reason to choose your business through the channels that fit your customers and commercial goals.",
    metaTitle: "Marketing, SEO & Customer Acquisition",
    metaDescription:
      "SEO, local visibility, paid advertising and lead generation, connected to a clear marketing strategy and the wider customer journey.",
    intro:
      "When people cannot find your business, do not understand its value or have no compelling reason to enquire, effective marketing can be essential. We identify where visibility, demand or differentiation needs attention and build the right acquisition approach.",
    signs: [
      "The right customers struggle to find you.",
      "Your offer is difficult to distinguish from alternatives.",
      "You need a more dependable way to generate relevant enquiries.",
    ],
    includes: [
      {
        heading: "Be found",
        items: [
          "SEO and organic visibility",
          "Local SEO and Google Business Profile",
          "Technical and on-page search improvements",
        ],
      },
      {
        heading: "Create demand",
        items: [
          "Paid advertising",
          "Lead generation and campaign planning",
          "Digital marketing strategy",
        ],
      },
      {
        heading: "Make the next step clear",
        items: [
          "Landing pages",
          "Conversion-focused content",
          "Messaging aligned with customer needs",
        ],
      },
    ],
    connects:
      "A campaign is only one part of the journey. We connect the promise in your marketing with the experience on your website and the response after an enquiry, so acquisition and follow-up support one another.",
    cta: "Discuss Customer Acquisition",
    cases: ["independent-insurance-agency", "beauty-supply-retailer-maryland"],
  },
  {
    slug: "sales-process-crm",
    name: "Sales & Conversion Systems",
    short: "Sales and conversion",
    headline: "More opportunities mean little if they don’t become customers.",
    summary:
      "Give every enquiry a clear next step, the right owner and a consistent path from first contact to becoming a customer.",
    metaTitle: "Sales Conversion Systems & CRM Implementation",
    metaDescription:
      "Lead capture, CRM implementation, follow-up workflows and sales process improvements that connect enquiries with a clearer customer journey.",
    intro:
      "Interest can be lost between a form submission, an inbox and a busy team. We look at what happens after a prospect makes contact, then improve the process and systems that help the team respond, follow up and move opportunities forward.",
    signs: [
      "Enquiries arrive in different places and ownership is unclear.",
      "Follow-up depends on individual memory.",
      "The pipeline gives you little visibility into what happens next.",
    ],
    includes: [
      {
        heading: "Capture and respond",
        items: [
          "Lead capture and routing",
          "Speed-to-lead improvements",
          "Clear responsibility for each enquiry",
        ],
      },
      {
        heading: "Manage the opportunity",
        items: [
          "CRM design and implementation",
          "Sales pipeline visibility",
          "Sales process improvements",
        ],
      },
      {
        heading: "Keep the journey moving",
        items: [
          "Follow-up workflows",
          "Conversion optimisation",
          "Customer journey improvements",
        ],
      },
    ],
    connects:
      "The right CRM supports the way your team sells. We clarify stages, ownership and follow-up before configuring the platform, then connect the process with your acquisition channels and delivery systems.",
    cta: "Improve Your Conversion Process",
    cases: ["independent-insurance-agency", "premium-pet-care"],
  },
  {
    slug: "technology-operations",
    name: "Technology & Operations",
    short: "Technology and operations",
    headline: "Connect the systems. Make the business work better.",
    summary:
      "Bring websites, digital infrastructure and operational workflows together around the way your business needs to work.",
    metaTitle: "Business Technology & Operational Systems",
    metaDescription:
      "Websites, digital infrastructure, workflow automation and system integration, shaped around practical operational improvements.",
    intro:
      "Disconnected tools, manual handoffs and unclear processes can make growth harder to manage. We examine how the work moves through the business before deciding where a process change, integration or new piece of infrastructure would help.",
    signs: [
      "The team copies information between tools.",
      "Your website and internal systems work in isolation.",
      "More demand is creating more administration and delivery friction.",
    ],
    includes: [
      {
        heading: "Digital infrastructure",
        items: [
          "Websites and customer-facing tools",
          "Forms, booking and payment integrations",
          "Content management and analytics",
        ],
      },
      {
        heading: "Connected operations",
        items: [
          "Workflow assessment and process design",
          "System integration and reporting",
          "Customer communication workflows",
        ],
      },
      {
        heading: "Practical implementation",
        items: [
          "Workflow automation",
          "Manual task reduction",
          "Practical AI applications where appropriate",
        ],
      },
    ],
    connects:
      "A website may be the right starting point. In another business, a simpler handoff or a connection between existing tools may matter more. The diagnosis determines the work and the sequence.",
    cta: "Discuss Your Operations",
    cases: ["premium-pet-care"],
  },
  {
    slug: "ai-automation",
    name: "Automation & Operations",
    short: "Automation and operations",
    headline: "Less friction. Better execution.",
    summary:
      "Improve how work flows through the business, using automation where it supports a clear and useful process.",
    metaTitle: "Business Process Automation & Operations",
    metaDescription:
      "Workflow assessment, process automation, system integration and practical AI to reduce manual work and improve operational execution.",
    intro:
      "Technology should support a sound business process. Automating a confusing workflow can simply move the confusion faster. We first understand the work, the handoffs and the exceptions, then decide what should be simplified, connected or automated.",
    signs: [
      "Staff repeatedly enter the same information.",
      "Scheduling, chasing and administration interrupt delivery.",
      "A clear process is difficult to run consistently with the capacity available.",
    ],
    includes: [
      {
        heading: "Assess the work",
        items: [
          "Workflow assessment",
          "Process and handoff review",
          "Manual task reduction",
        ],
      },
      {
        heading: "Connect and automate",
        items: [
          "Process automation",
          "System integration",
          "Customer communication workflows",
        ],
      },
      {
        heading: "Maintain control",
        items: [
          "Operational reporting",
          "Practical AI applications",
          "Human handoff and exception handling",
        ],
      },
    ],
    connects:
      "Practical applications may include routing an enquiry, collecting missing information, updating records or preparing a report. The choice depends on the process, the data available and the level of human judgement required.",
    cta: "Discuss Your Operations",
    cases: [],
  },
  {
    slug: "websites-digital-infrastructure",
    name: "Websites & Digital Infrastructure",
    short: "Websites and digital infrastructure",
    headline: "Your website should do more than look good.",
    summary:
      "Website design and development that helps customers understand your value, take the next step and connect with the business behind the screen.",
    metaTitle: "Website Design, Development & Digital Infrastructure",
    metaDescription:
      "Website strategy, UX design, development, technical SEO and integrations. Build a website that supports your wider commercial system.",
    intro:
      "Your website is often where interest becomes an enquiry, a booking or a purchase. We design and develop websites around that job, connecting the customer experience with the systems your team uses to respond and deliver.",
    signs: [
      "Visitors struggle to understand your offer or take action.",
      "Your site is difficult to use on mobile or slow to load.",
      "Forms, bookings and internal workflows do not connect.",
    ],
    includes: [
      {
        heading: "Strategy and experience",
        items: [
          "Website strategy",
          "UX and conversion design",
          "Content structure and customer journeys",
        ],
      },
      {
        heading: "Design and development",
        items: [
          "Website development",
          "Technical SEO",
          "Performance optimisation and content management",
        ],
      },
      {
        heading: "Connect and measure",
        items: [
          "Forms and lead capture",
          "Booking and payment integrations",
          "Analytics and tracking, with appropriate consent",
        ],
      },
    ],
    connects:
      "A better website can improve a vital part of the commercial journey. It works best when the promise in your marketing, the path to enquiry and the response from your team fit together.",
    cta: "Discuss Your Website",
    cases: ["independent-insurance-agency", "premium-pet-care"],
  },
];
export const coreCapabilities = capabilities.filter(
  (c) => !["ai-automation", "websites-digital-infrastructure"].includes(c.slug),
);
export const getCapability = (slug: string) =>
  capabilities.find((c) => c.slug === slug);
