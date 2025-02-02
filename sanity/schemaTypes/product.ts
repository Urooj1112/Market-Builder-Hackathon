import { defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
      title: "Description",
    },
    {
      name: "productImage",
      type: "image",
      validation: (rule) => rule.required(),
      title: "Product Image",
    },
    {
      name: "price",
      type: "number",
      validation: (rule) => rule.required(),
      title: "Price",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    },
    {
      name: "discountPercentage",
      type: "number",
      title: "Discount Percentage",
    },
    {
      name: "isNew",
      type: "boolean",
      title: "New Badge",
    },
    {
      name: "colors",
      type: "array",
      title: "Colors",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Blue", value: "blue" },
              { title: "Green", value: "green" },
              { title: "Red", value: "red" },
              { title: "Black", value: "black" },
            ],
          },
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Bedroom", value: "bedroom" },
          { title: "Home Decor", value: "home-decor" },
          { title: "Lighting", value: "lighting" },
          { title: "Furniture", value: "furniture" },
        ],
      },
      validation: (rule) => rule.required(),
    },
  ],
});
