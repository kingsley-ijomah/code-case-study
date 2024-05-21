import DataTable from 'react-data-table-component';
import { useState, useEffect } from 'react';
import { BsBagCheckFill, BsBagXFill } from 'react-icons/bs';

const Table = ({ body }) => {
    const [data, setData] = useState([]);

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Image',
            selector: (row) => {
                return <div><img height={'auto'} width={50} alt={row.title} src={row.image_src} /></div>
            },
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Vendor',
            selector: row => row.vendor,
            sortable: true,
        },
        {
            name: 'Tags',
            selector: row => row.tags.map((el, i) => {
                return <button key={i} type="button" className="btn btn-secondary btn-sm px-2 rounded-circle mx-1">
                    {el}
                </button>
            }),
            width: '18rem',

        },
        {
            name: 'Slug',
            selector: row => row.slug,
            sortable: true,
        },
        {
            name: 'Published',
            selector: (row) => {
                return (row.published === true) ? <button type="button" className="btn btn-primary btn-sm px-3">
                    true
                </button> : <button type="button" className="btn btn-danger btn-sm px-3">
                    false
                </button>;
            },
            sortable: true,
        },
        {
            name: 'Url',
            selector: (row) => {
                return <a href={row.url}>{row.title}</a>
            },
        },
        {
            name: 'Option',
            selector: row => row.option_value,
            sortable: true,
        },
        {
            name: 'Sku',
            selector: row => row.sku,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true,
        },
        {
            name: 'Subscription_Discount',
            selector: row => row.subscription_discount || '--',
            sortable: true,
        },
        {
            name: 'Subscription',
            selector: (row) => {
                return (row.subscription === true) ? <button type="button" className="btn btn-success btn-sm px-3">
                    <BsBagCheckFill />
                </button> : <button type="button" className="btn btn-danger btn-sm px-3">
                    <BsBagXFill />
                </button>;
            }
        },
    ];

    useEffect(() => {
        setData(body);

    }, [body])

    return (
        <section title="productTable">
            <DataTable
                fixedHeader
                fixedHeaderScrollHeight="60vh"
                title="Products"
                columns={columns}
                data={data}
                pagination
                paginationRowsPerPageOptions={[5, 10, 20]}
                paginationPerPage={8}
            />
        </section>
    );
};
export default Table;