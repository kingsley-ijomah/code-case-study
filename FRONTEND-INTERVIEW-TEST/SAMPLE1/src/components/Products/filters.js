import React from "react"
import useProducts from "../../context/Products/ProductsContext"

const Filters = () => {
    const {
        totalCount,
        searchQuery,
        setSearchQuery,
        isSubscription,
        setIsSubscription,
        priceValue,
        setPriceValue,
    } = useProducts()
    return (
        <div className="border-b md:border-b-0 md:border-r border-grey-200 pr-8 pb-8">
            <h2 className="text-lg font-medium text-gray-700 mb-6">Filter {totalCount} items:</h2>

            <div className="relative mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                        type="text"
                        data-testid="query-input_test-id"
                        placeholder="Search dog, formula, chews..."
                        className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    />
            </div>

            <div className="flex items-center mb-6">
                <label htmlFor="checked-checkbox" className="mr-2 text-base text-gray-800 dark:text-gray-800">With Subscription</label>
                <input data-testid="subscription-checkbox_test-id" value={isSubscription} id="checked-checkbox" onChange={() => setIsSubscription(!isSubscription)} type="checkbox" className="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            </div>
            
            <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="rgb(156 163 175)" x="0px" y="0px" viewBox="0 0 100.79 122.88" stroke="currentColor">
                        <g>
                            <path d="M45.64,52.31h24.6v19.43H48.49c-0.28,4.57-1.11,8.69-2.52,12.37c-1.13,2.79-3.02,5.7-5.67,8.72c3.02-0.66,5.62-1,7.78-1 c2.77,0,6.36,0.53,10.79,1.58c6.06,1.38,10.9,2.08,14.53,2.08c2.96,0,5.54-0.25,7.72-0.75c2.21-0.5,5.09-1.55,8.63-3.15 l11.04,24.24c-5.34,2.66-10.05,4.51-14.12,5.54c-4.04,1.02-8.38,1.52-13.04,1.52c-5.09,0-10.88-0.89-17.44-2.66 c-8.58-2.35-13.89-3.71-15.97-4.1c-2.05-0.36-4.26-0.55-6.64-0.55c-6.97,0-14.67,2.43-23.08,7.31L0,99.8 c11.4-8.14,17.1-16.27,17.1-24.41c0-0.44-0.06-1.66-0.17-3.65H0V52.31h12.12c-2.05-7.11-3.24-11.26-3.49-12.4 c-0.33-1.72-0.5-3.85-0.5-6.39c0-6.75,1.8-12.81,5.4-18.18c3.57-5.37,8.3-9.27,14.17-11.68C33.57,1.22,41.46,0,51.39,0 c9.3,0,16.66,1.05,22.08,3.13C78.9,5.2,83.5,8.66,87.23,13.48c3.76,4.84,6.34,10.68,7.75,17.55l-31.05,4.84 c-1.55-5.76-3.35-9.58-5.37-11.46c-2.02-1.88-4.32-2.82-6.89-2.82c-3.13,0-5.65,1.02-7.58,3.07c-1.94,2.05-2.91,4.95-2.91,8.72 c0,2.02,0.19,3.93,0.58,5.78C42.12,41.04,43.42,45.42,45.64,52.31L45.64,52.31z"/>
                        </g>
                    </svg>
                    <input
                        onChange={(e) => setPriceValue(e.target.value)}
                        value={priceValue}
                        type="number"
                        data-testid="price-input_test-id"
                        min="1" 
                        max="1000" 
                        step="any"
                        placeholder="5, 10, 20..."
                        className="w-1/2 py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    />
            </div>
        
        </div>
    )
}

export default Filters