/** Existing service URLs are retained; the diagnosis determines which capabilities are useful. */
export type Capability = {
  slug:
    | "ai-strategy"
    | "ai-assistants"
    | "ai-adoption"
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
    name: "AI Workflow & Automation",
    short: "AI workflow and automation",
    headline: "Put AI to work in the flow of your business.",
    summary:
      "Reduce repetitive work and connect business systems with practical AI workflows, clear rules and human oversight.",
    metaTitle: "AI Workflow Automation & Business Process Integration",
    metaDescription:
      "Practical AI workflow automation for sales, customer service and operations. Connect systems, reduce repetitive work and keep people in control.",
    intro:
      "A useful automation starts with a process worth improving. We map the work, identify where AI can assist and use straightforward rules where they are the better fit. The aim is a workflow the team can understand, use and review.",
    signs: [
      "Staff repeatedly enter the same information.",
      "Scheduling, chasing and administration interrupt delivery.",
      "A clear process is difficult to run consistently with the capacity available.",
    ],
    includes: [
      {
        heading: "Understand the workflow",
        items: [
          "Process and handoff mapping",
          "Data access and integration requirements",
          "Prioritisation of repetitive tasks",
        ],
      },
      {
        heading: "Build the connections",
        items: [
          "AI-assisted information extraction and drafting",
          "CRM and business-tool integrations",
          "Routing, updates and customer communication workflows",
        ],
      },
      {
        heading: "Keep people in control",
        items: [
          "Approval steps and exception handling",
          "Workflow testing and operational reporting",
          "Documentation and handover",
        ],
      },
    ],
    connects:
      "An enquiry might be summarised, routed to the right person and used to prepare a draft response. A team member reviews the response before it is sent. This is an illustrative application, not a reported client result; the design depends on the process and data available.",
    cta: "Discuss Your AI Workflow",
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
  {
    slug: "ai-strategy",
    name: "AI Strategy & Readiness",
    short: "AI strategy and readiness",
    headline: "Know where AI is worth the investment.",
    summary:
      "Identify useful AI opportunities, assess what is ready and build a practical roadmap around the business.",
    metaTitle: "AI Strategy Consulting & Readiness Assessment",
    metaDescription:
      "AI strategy consulting grounded in business priorities. Assess workflows, data and readiness, then prioritise opportunities and plan implementation.",
    intro:
      "There is no shortage of AI tools. The harder decision is where to use them. We start with your goals, the work people do and the systems already in place, then assess where AI could make a useful contribution.",
    signs: [
      "There are many AI ideas, but no agreed priority.",
      "You want to understand the effort, data needs and risks before investing.",
      "Teams are experimenting with tools without a shared approach.",
    ],
    includes: [
      {
        heading: "Understand the opportunity",
        items: [
          "Business goals and workflow discovery",
          "Opportunity mapping across teams",
          "Assessment of current tools and processes",
        ],
      },
      {
        heading: "Assess readiness",
        items: [
          "Data availability and access requirements",
          "People, process and integration readiness",
          "Privacy, reliability and oversight requirements",
        ],
      },
      {
        heading: "Choose a practical path",
        items: [
          "Prioritisation by potential value and feasibility",
          "A scoped starting point or pilot",
          "An implementation roadmap and success criteria",
        ],
      },
    ],
    connects:
      "The assessment informs what to build, what to test first and what should wait. An opportunity may lead to a workflow, an assistant or a simpler process change. We establish a reason for using AI before choosing the tools.",
    cta: "Discuss Your AI Opportunities",
    cases: [],
  },
  {
    slug: "ai-assistants",
    name: "AI Assistants & Integrations",
    short: "AI assistants and integrations",
    headline: "Useful assistance. Connected to the way you work.",
    summary:
      "Build focused AI assistants that help people find information, prepare work and interact with existing business systems.",
    metaTitle: "AI Assistants & Business System Integrations",
    metaDescription:
      "AI assistants for knowledge access, customer enquiries and internal work, with business-system integrations, clear permissions and human handoff.",
    intro:
      "An assistant needs a specific job and a reliable source of information. We define the tasks, connect the relevant knowledge and systems, and design what happens when it cannot answer or an action needs approval.",
    signs: [
      "People spend too long searching documents or asking the same questions.",
      "Customer enquiries need a more consistent first step.",
      "You need AI tools to work with existing systems rather than in a separate window.",
    ],
    includes: [
      {
        heading: "Define the job",
        items: [
          "Task and conversation design",
          "Knowledge sources and access boundaries",
          "User roles and escalation requirements",
        ],
      },
      {
        heading: "Connect the assistant",
        items: [
          "Internal knowledge assistants",
          "Enquiry support and draft preparation",
          "Business-tool and CRM integrations",
        ],
      },
      {
        heading: "Test the boundaries",
        items: [
          "Evaluation with representative questions",
          "Source checking and fallback behaviour",
          "Human approval and handoff for sensitive actions",
        ],
      },
    ],
    connects:
      "An internal assistant could help a team find an approved procedure and link back to the source. A customer-facing assistant might collect information and hand the enquiry to a person. These are possible applications, shaped around your knowledge, permissions and service standards.",
    cta: "Discuss an AI Assistant",
    cases: [],
  },
  {
    slug: "ai-adoption",
    name: "AI Adoption & Improvement",
    short: "AI adoption and improvement",
    headline: "Make AI useful beyond the first demonstration.",
    summary:
      "Help people use the systems confidently, evaluate how they perform and improve them as the work changes.",
    metaTitle: "AI Adoption, Training & Continuous Improvement",
    metaDescription:
      "Practical AI adoption support, team guidance, evaluation and workflow improvement. Help people use AI systems with clear responsibilities and oversight.",
    intro:
      "A working demonstration is a starting point. The system needs to fit real tasks, the team needs to understand its limits and someone needs to own what happens next. Adoption is part of implementation.",
    signs: [
      "An AI tool has launched, but people are not using it consistently.",
      "The team needs clear guidance on what to check and when to escalate.",
      "You want to assess quality and usefulness with evidence from day-to-day work.",
    ],
    includes: [
      {
        heading: "Prepare the people",
        items: [
          "Role-specific guidance and practical training",
          "Usage boundaries and review responsibilities",
          "Documentation and working procedures",
        ],
      },
      {
        heading: "Evaluate the work",
        items: [
          "Success criteria and representative test cases",
          "Review of output quality and exceptions",
          "Feedback from the people using the system",
        ],
      },
      {
        heading: "Improve deliberately",
        items: [
          "Workflow and knowledge-source refinements",
          "Handover and ownership planning",
          "A review cadence appropriate to the engagement",
        ],
      },
    ],
    connects:
      "We agree what useful performance looks like and how it can be reviewed. That may include task completion, accuracy checks, exception rates and user feedback. We do not promise a fixed productivity or revenue improvement.",
    cta: "Discuss AI Adoption",
    cases: [],
  },
];
export const coreCapabilities = [
  "ai-strategy",
  "ai-automation",
  "ai-assistants",
  "ai-adoption",
].map((slug) => capabilities.find((c) => c.slug === slug)!);
export const supportingCapabilities = capabilities.filter(
  (c) => !coreCapabilities.includes(c),
);
export const getCapability = (slug: string) =>
  capabilities.find((c) => c.slug === slug);
