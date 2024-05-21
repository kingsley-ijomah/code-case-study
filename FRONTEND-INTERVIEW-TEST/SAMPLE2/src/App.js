import Product from "./pages/Product";
import Layout from "./components/Layout/Layout";
import "./style/index.scss";

function App() {
  return (
    <>
      <Layout>
        <Product />
      </Layout>
      {/* App.js containing layout and product component */}
    </>
  );
}

export default App;
