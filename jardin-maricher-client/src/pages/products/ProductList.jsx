import './products.css';
import Navbar from '../../components/navbar/Navbar';
import Filter from '../../components/filter/Filter';
import Products from '../../components/products/Products';
import Newsletter from '../../components/newsletter/Newsletter';
import { useLocation } from 'react-router';
import { useState } from 'react';

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState({"sort" : "desc"});

    function handleFilterChange (e) {
        const value = e.target.value;
        setFilter({
            "filter" : value
        })
    }

    function handleSortChange (e) {
        const value = e.target.value;
        setSort({
            "sort" : value
        })
    }


    return (
            
        <div className="productList">
            <Navbar />
            <h1 className="productTitle">Fruits</h1>
            <Filter filterChange={handleFilterChange} sortChange={handleSortChange} />
            <Products cat={cat} filter={filter} sort={sort} />
            <Newsletter />
        </div>
    )
}

export default ProductList
