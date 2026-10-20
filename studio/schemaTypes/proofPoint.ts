import { defineField, defineType } from "sanity";

export const proofPoint = defineType({
  name: "proofPoint",
  title: "Proof point",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Who it was for, e.g. “Independent insurance agency”. No client names without written permission.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "result",
      title: "Result",
      type: "string",
      description: "What changed. Only publish figures that come from the client's own data, with their agreement.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: { select: { title: "title", subtitle: "result" } },
});
