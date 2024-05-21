import { render } from "@testing-library/react";
import Table from "../components/Table";

const dummy_product_list = [
  {
    id: 12,
    slug: "clear-eyes-for-cats",
    title: "Clear Eyes Cats",
    vendor: "PetLab",
    tags: ["Formula", "Cat"],
    published: false,
    url: "https://www.thepetlabco.com/products/cat-eye-cleaner",
    image_src:
      "https://cdn.shopify.com/s/files/1/0015/4874/6807/products/clear_eyes_chews_x1.jpg?v=1566390961",
    option_value: "Single Pack",
    sku: "TSC1",
    price: 42.29,
    subscription_discount: 25,
    subscription: true,
  },
];

const empty_product_list = [];

describe("Product Table component", () => {
  test("When no products are provided a message is displayed", () => {
    render(<Table body={empty_product_list} />);
  });

  test("When products are provided they are rendered", () => {
    render(<Table body={dummy_product_list} />);
  });
});
