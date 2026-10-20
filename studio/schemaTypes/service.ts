import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short description",
      type: "text",
      rows: 3,
      description: "One or two sentences. Shown on the homepage and the Services page.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first.",
      validation: (rule) => rule.required().integer().min(0),
    }),
    defineField({
      name: "visible",
      title: "Show on the website",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "page",
      title: "Links to page",
      type: "string",
      description: "Which service page this card opens. The pages themselves are still built by the developer.",
      options: {
        list: [
          { title: "Commercial diagnosis and positioning", value: "commercial-diagnosis" },
          { title: "Customer acquisition and conversion", value: "customer-acquisition" },
          { title: "Sales process, CRM, and follow-up", value: "sales-process-crm" },
          { title: "Practical AI and automation", value: "ai-automation" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", order: "order", visible: "visible" },
    prepare: ({ title, order, visible }) => ({
      title,
      subtitle: `${order ?? "–"}${visible === false ? " · hidden" : ""}`,
    }),
  },
});
