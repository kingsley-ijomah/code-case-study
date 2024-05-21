import axios from "axios";

const url = process.env.REACT_APP_LOCAL_URL_API;

// Get all products
const getProducts = async () => {
  try {
    const resp = await axios.get(url);
    if (resp.data) {
      return resp.data;
    }
  } catch (error) {
    console.log(error);
  }
};

// Get product by tag
const getProductByTag = async (filter) => {
  try {
    // tweak the query to search an array of tags
    const tagArray = [];
    const resp = await axios.get(url);
    if (resp.data) {
      resp.data.forEach((el) => {
        el.tags.forEach((element) => {
          if (element.toUpperCase() === filter.toUpperCase()) {
            tagArray.push(el);
          }
        });
      });
      return tagArray;
    }
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};

// Get product by price
const getProductByPrice = async (filter) => {
  try {
    const resp = await axios.get(`${url}?price=${filter}`);
    if (resp.data) {
      return resp.data;
    }
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};

// Get product by subscription type
const getProductBySub = async (filter) => {
  try {
    const resp = await axios.get(`${url}?subscription=${filter}`);
    if (resp.data) {
      return resp.data;
    }
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};

export { getProducts, getProductByTag, getProductByPrice, getProductBySub };
