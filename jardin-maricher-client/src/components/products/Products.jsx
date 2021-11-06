import './products.css';
import Box from "./box/Box";
import { useState, useEffect } from 'react'; 
import axios from "axios";

const Products = ({cat, filter, sort}) => {

    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() =>{
        const getProducts = async () => {
            try {
                const res = await axios.get( cat ? `http://localhost:3001/api/v3/products?category=${cat}` : 'http://localhost:3001/api/v3/products' )
                setProducts(res.data);
            } catch (error) {
               console.error(error); 
            }
        }

        getProducts();
    }, [cat])

    /* FIRST UPDATE YOUR BACKEND */

    useEffect(()=>{
        if(cat){

            if(sort.sort === "recent"){
                
    
                setSortedProducts(products)
                
            }
    
            else if(sort.sort === "asc"){
                
                const p = products.sort((a,b) => a.price - b.price)
                setSortedProducts(p)
                
            }
    
            else if(sort.sort === "desc"){
                const p = products.sort((a,b) => b.price - a.price)
                setSortedProducts(p)
                
            }
        }
        
    },[products,cat, sort])

    
    return (
        <div className="product-container">
            {cat ? sortedProducts.map((product) => {
                return <Box id={product._id} name={product.name} category={product.category} price={product.price} key={product._id} owner={product.owner.username}/>
            }) : products.slice(0,8).map((product) => {
                return <Box id={product._id} name={product.name} category={product.category} price={product.price} key={product._id} owner={product.owner.username}/>
            }) }
        </div>
    )
}

export default Products
