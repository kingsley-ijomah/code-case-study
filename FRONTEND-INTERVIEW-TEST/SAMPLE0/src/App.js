import { Loading } from "./Loading/Loading";
import s from "./App.module.scss";
import { Sidebar } from "./Sidebar/Sidebar";
import { Tags } from "./Tags/Tags";
import { Price } from "./Price/Price";
import { Subscription } from "./Subscription/Subscription";
import { useState, useEffect } from "react";
import { fetchData, fetchNextPage, fetchPrevPage } from "./Api";
import { ToastContainer } from "react-toastify";
import { Pagination } from "./Pagination/Pagination";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [tagList, setTagList] = useState();
  const [price, setPrice] = useState(null);
  const [tags, setTags] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const [tagData, setTagData] = useState(null);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const products = await fetchData(tags, price, subscription);
      setData(products);
      setLoading(false);
    };
    getData();
  }, [tags, price, subscription]);

  const handleNextPage = async () => {
    const nextPage = (await pageCount) + 1;
    const products = await fetchNextPage(tags, price, subscription, nextPage);
    setData(products);
    setPageCount(pageCount + 1);
    setLoading(false);
  };

  const handlePrevPage = async () => {
    const prevPage = (await pageCount) - 1;
    const products = await fetchPrevPage(tags, price, subscription, prevPage);
    if (pageCount > 1) {
      setPageCount(pageCount - 1);
    }
    setData(products);
    setLoading(false);
  };

  if (loading) return <Loading />;

  return (
    <div className={s.App}>
      <Sidebar>
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          pageCount={pageCount}
          data={data}
        />

        <Tags
          tagList={tagList}
          tags={tags}
          setTags={setTags}
          setTagData={setTagData}
          setTagList={setTagList}
          tagData={tagData}
        />
        <Subscription
          setSubscription={setSubscription}
          subscription={subscription}
        />
        <Price setPrice={setPrice} price={price} />
      </Sidebar>
      <div className={s.container}>
        <ToastContainer />
        <table>
          <tbody className={s.tb}>
            {data.map((info) => (
              <tr className={s.tr} key={info.slug}>
                <td>
                  <img src={info.image_src} width={200} />
                </td>
                <td className={s.title}>
                  <h4>{info.title}</h4>
                </td>
                <td className={s.price}>
                  <h4>£{info.price.toFixed(2)}</h4>
                </td>
                <td className={s.tags}>
                  <h5>{info.tags.join(", ")}</h5>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
