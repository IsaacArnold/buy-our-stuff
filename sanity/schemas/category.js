import { FaListAlt as icon } from "react-icons/fa";

export default {
  name: "category",
  title: "Categories",
  type: "document",
  icon: icon,
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string",
      description: "What is the name of the category?",
    },
  ],
};
