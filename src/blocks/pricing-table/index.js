import edit from "./edit";
import save from "./save";
import "./style.scss";
import "./editor.scss";

wp.blocks.registerBlockType("product-pricing/pricing-table", {
  title: "Pricing Table",
  icon: "table-col-after",
  category: "widgets",
  attributes: {
    plan1: { type: "string", default: "Free" },
    plan2: { type: "string", default: "Plus" },
    plan3: { type: "string", default: "Pro" },
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
    }
  },
  edit,
  save
});
 