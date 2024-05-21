import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const errorToast = () => toast('Error fetching data');

export const fetchData = async (tags, price, subscription) => {
  try {
    const fetchResponse = await fetch(
      `http://localhost:3000/products/?_page=1&_limit=12${
        tags ? `&tags_like=${tags}` : ''
      }${subscription ? `&subscription=${subscription}` : ''}`
    );

    const json = await fetchResponse.json();
    return json.filter((i) => i.price <= (price !== null ? price : 10000));
  } catch (error) {
    errorToast();
  }
};

export const fetchTags = async () => {
  try {
    const fetchResponse = await fetch(`http://localhost:3000/products`);
    const json = await fetchResponse.json();
    return json;
  } catch (error) {
    errorToast();
  }
};

export const fetchNextPage = async (tags, price, subscription, pageCount) => {
  try {
    const fetchResponse = await fetch(
      `http://localhost:3000/products/?_page=${pageCount}&_limit=12${
        tags ? `&tags_like=${tags}` : ''
      }${subscription ? `&subscription=${subscription}` : ''}`
    );

    const json = await fetchResponse.json();

    return json.filter((i) => i.price <= (price !== null ? price : 10000));
  } catch (error) {
    errorToast();
  }
};

export const fetchPrevPage = async (tags, price, subscription, pageCount) => {
  try {
    const fetchResponse = await fetch(
      `http://localhost:3000/products/?_page=${pageCount}&_limit=12${
        tags ? `&tags_like=${tags}` : ''
      }${subscription ? `&subscription=${subscription}` : ''}`
    );

    const json = await fetchResponse.json();

    return json.filter((i) => i.price <= (price !== null ? price : 10000));
  } catch (error) {
    errorToast();
  }
};
