import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "heroHeadline",
      title: "Hero headline",
      type: "text",
      rows: 2,
      description:
        "The big headline at the top of the homepage. Each line here starts a new line on the page. Wrap the words that get the red pen underline in double equals signs, like ==holding growth back==.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero subheadline",
      type: "text",
      rows: 3,
      description: "The paragraph under the headline.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroCtaText",
      title: "Main button text",
      type: "string",
      description: "The red button in the hero. It always links to the contact page.",
      validation: (rule) => rule.required().max(40),
    }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});
