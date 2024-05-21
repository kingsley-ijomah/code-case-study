import { render } from "@testing-library/react";
import Loader from "../components/Loader";

let loading = true;
setTimeout(() => {
  loading = false;
}, 3000);

describe("Loader Component", () => {
  test("When products are being fetched", () => {
    render( loading && <Loader />);
  });

});
