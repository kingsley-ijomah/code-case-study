import { useState } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GiArchiveResearch } from "react-icons/gi";


const SideFilter = ({ filter, type }) => {
    const [tags, setTags] = useState('');
    const [price, setPrice] = useState('');
    const [subscription, setSubscription] = useState('');
    const [error, setError] = useState('');

    // Function to send search query to parent component
    const handleFilter = (e) => {
        e.preventDefault();
        setError('');
        if (tags !== '' || price !== '' || subscription !== '') {
            if (tags !== '') {
                filter(tags);
                type('tags');
            }
            else if (price !== '') {
                filter(price);
                type('price');
            }
            else if (subscription !== '') {
                filter(subscription);
                type('sub');
            }
        } else {
            setError('Please select at least one filter');
        }
    }

    // Function to handle ONLY the tags input
    const handleTag = (e) => {
        setTags(e.target.value)
        setPrice('');
        setSubscription('');
    };
    // Function to handle ONLY the price input
    const handlePrice = (e) => {
        setPrice(e.target.value);
        setSubscription('');
        setTags('');
    };
    // Function to handle ONLY the subscription select
    const handleSub = (e) => {
        setSubscription(e.target.value);
        setTags('');
        setPrice('');
    };

    return (
        <>
            <section className="search card card-body border-0 shadow-sm mb-3">
                <h6 className="text-primary h6">Search by ...</h6>
                <form action="" onSubmit={handleFilter}>
                    {/* Tag input */}
                    <div className="input-group input-group-sm mb-3">
                        <label htmlFor="name" className="visually-hidden">Tags: </label>
                        <span className="input-group-text" id="tags"><AiOutlineFileSearch /></span>
                        <input type="text" className="form-control form-control-sm" id="tags" name="tags" placeholder="... tags" aria-label="Tags" aria-describedby="name" value={tags} onChange={handleTag} />
                    </div>
                    {/* Price input */}
                    <div className="input-group input-group-sm mb-3">
                        <label htmlFor="price" className="visually-hidden">Price: </label>
                        <span className="input-group-text" id="price"><GiArchiveResearch /></span>
                        <input type="number" className="form-control form-control-sm" id="price" name="price" placeholder="... Price" aria-label="Price" aria-describedby="price" value={price} onChange={handlePrice} />
                    </div>
                    {/* Subscription Select */}
                    <div className="input-group mb-3">
                        <label htmlFor="subscription" className="visually-hidden">Subscriptions: </label>
                        <select name="subscription" id="subscription" className="form-select form-select-sm" defaultValue={subscription} onChange={handleSub}>
                            <option value="" disabled>--filter by subscription--</option>
                            <option value="false">False</option>
                            <option value="true">True</option>
                        </select>
                    </div>
                    {/* submit button */}
                    <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                </form>
                {/* display error if any */}
                {error && <p className="text-danger">{error}</p>}
            </section>
        </>
    );
}

export default SideFilter;
