import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table'
import Loader from '../components/Loader';
import SideFilter from '../components/SideFilter';
import { getProducts, getProductByTag, getProductByPrice, getProductBySub } from '../services/product';

const Product = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState('');
    const [queryType, setQueryType] = useState('');

    // Get all products
    useEffect(() => {
        let source = axios.CancelToken.source();

        const getData = async () => {
            setLoading(true);
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
                // source.cancel();
            }
        }

        getData();

        return function () {
            source.cancel("Cancelling in cleanup");
        };
    }, []);

    // Get products based on search parameters
    useEffect(() => {
        let source = axios.CancelToken.source();

        const searchData = async () => {
            setLoading(true);
            try {
                // Figure out the exact search type
                if (queryType === 'tags') {
                    const tagData = await getProductByTag(query);
                    setProducts(tagData);
                } else if (queryType === 'price') {
                    const priceData = await getProductByPrice(query);
                    setProducts(priceData);
                } else if (queryType === 'sub') {
                    const subData = await getProductBySub(query);
                    console.log(subData, query);
                    setProducts(subData);
                }

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        searchData();

        return function () {
            source.cancel("Cancelling in cleanup");
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, queryType]);

    return (
        <>
            <div className="container-fluid">
                {/* conditional rendering */}
                {loading ? <Loader /> : <div className="row">
                    <div className="col-lg-3 col-md-4 col-12">
                        <SideFilter filter={setQuery} type={setQueryType} />
                    </div>
                    <div className="col-lg-9 col-md-8 col-12">
                        <Table body={products} />
                    </div>
                </div>}
            </div>
        </>
    );
}

export default Product;
