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
    price3: { type: "string", default: "0" }
  },
  edit,
  save
});
