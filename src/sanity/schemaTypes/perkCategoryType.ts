import { defineField, defineType } from "sanity";

export const perkCategoryType = defineType({
  name: "perkCategory",
  title: "Perk Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      description: "Brief description of this category",
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      description: "Hex color code for this category (e.g., #008300)",
      initialValue: "#008300",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description:
        "Order for displaying categories (lower numbers appear first)",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
    },
  },
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Name A-Z",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
});
