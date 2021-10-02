import { MdEmail as icon } from "react-icons/md";

export default {
  name: "contact_button",
  title: "Contact buttons",
  type: "document",
  icon: icon,
  fields: [
    {
      name: "name",
      title: "Contact Name",
      type: "string",
      description: "Who should the person contact?",
    },
    {
      name: "contact_link",
      type: "email",
      title: "Email address here",
    },
  ],
};
