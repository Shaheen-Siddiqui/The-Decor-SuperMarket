import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */
import { image1, image3, image5, image6 } from "../../frontend/assets";
export const categories = [
  {
    _id: uuid(),
    categoryName: "Dressing Table",
    categoryImage: image1,
    description:
      "dressing tables are designed to be both functional and aesthetically pleasing, with a range of styles to suit different tastes.",
  },
  {
    _id: uuid(),
    categoryName: "Sofa",
    categoryImage: image5,
    description:
      "variety of sofas with contemporary designs and superior quality materials that are designed to be both stylish and comfortable",
  },
  {
    _id: uuid(),
    categoryName: "Bed",
    categoryImage: image3,
    description:
      " wide range of beds in different sizes and designs to suit every need and taste, providing comfort, durability, and style",
  },
  {
    _id: uuid(),
    categoryName: "Luxury set",
    categoryImage: image6,
    description:
      "Luxury furniture sets are premium quality furniture pieces that are designed with high-quality materials and intricate detailing to provide a sophisticated and elegant look to any living space.",
  },
];
