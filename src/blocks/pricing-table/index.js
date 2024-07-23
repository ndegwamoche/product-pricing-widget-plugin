import edit from "./edit";
import "./style.scss";
import "./editor.scss";

wp.blocks.registerBlockType("product-pricing/pricing-table", {
  title: "Pricing Table",
  icon: "table-col-after",
  category: "widgets",
  attributes: {
    bgColor: { type: "string", default: "#ebebeb" },
    planAlignment1: { type: "string", default: "center" },
    plan1: { type: "string", default: "DEFAULT PLAN 1" },
    plan2: { type: "string", default: "DEFAULT PLAN 2" },
    plan3: { type: "string", default: "DEFAULT PLAN 3" },
    price1: { type: "string", default: "0" },
    price2: { type: "string", default: "0" },
    price3: { type: "string", default: "0" },
    properties: {
      type: "object",
      default: {
        plan1: ["Feature 1"],
        plan2: ["Feature 1"],
        plan3: ["Feature 1"]
      }
    },
    propertyStates: {
      type: "object",
      default: {
        plan1: [false],
        plan2: [false],
        plan3: [false]
      }
    },
    buttonLabel1: { type: "string", default: "Button 1" },
    buttonLabel2: { type: "string", default: "Button 2" },
    buttonLabel3: { type: "string", default: "Button 3" },
    buttonURL1: { type: "string", default: "" },
    buttonURL2: { type: "string", default: "" },
    buttonURL3: { type: "string", default: "" },
    buttonOpenInNewTab1: { type: "boolean", default: false },
    buttonOpenInNewTab2: { type: "boolean", default: false },
    buttonOpenInNewTab3: { type: "boolean", default: false },
    buttonNoFollow1: { type: "boolean", default: false },
    buttonNoFollow2: { type: "boolean", default: false },
    buttonNoFollow3: { type: "boolean", default: false }
  },
  description: "Gutenberg blocks for pricing tables and single products.",
  example: {
    attributes: {
      plan1: "DEFAULT PLAN 1",
      plan2: "DEFAULT PLAN 2",
      plan3: "DEFAULT PLAN 3"
    }
  },
  edit,
  save: function (props) {
    return null;
  }
});
