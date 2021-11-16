import { FaShoppingBag as icon } from "react-icons/fa";

export default {
  name: "product",
  title: "Products",
  type: "document",
  icon: icon,
  fields: [
    {
      name: "name",
      title: "Product name",
      type: "string",
      description: "Name of the product",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      description: "This is the image that will appear on the products page",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageGallery",
      title: "Image gallery",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "product_description",
      title: "Product description",
      type: "text",
      description: "Tell the customers a little about your product.",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of the product",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
    {
      name: "contact_person",
      title: "Contact Button",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "contact_button" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "imageGallery.0",
      category0: "categories.0.name",
      category1: "categories.1.name",
      category2: "categories.2.name",
      category3: "categories.3.name",
    },
    prepare: ({ title, media, ...categories }) => {
      const cat = Object.values(categories).filter(Boolean);
      //   Returns the new items to select
      return {
        title,
        media,
        subtitle: cat.join(", "),
      };
    },
  },
};
