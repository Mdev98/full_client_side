// import { PanoramaPhotosphere } from '@mui/icons-material';
import '../product.css';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router';
import { addProduct } from '../../../redux/cartRedux';
import { useDispatch} from "react-redux";
import axios from "axios"

const ProductDetails = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch()



    useEffect(() =>{
        const getProducts = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/api/v3/products/${id}` )
                setProduct(res.data);
            } catch (error) {
               console.error(error); 
            }
        }

        getProducts();
    }, [id])

    function handleQuantity(e) {
        const value = e.target.value;
        setQuantity(value);
    }

    function handleClick() {
        dispatch(addProduct({ ...product, quantity }));
    }


    return (
        <div className="productDetails">
            <img className="productDetailImage" src={`http://localhost:3001/api/v3/image/${product._id}/product`} alt="product"/>
            <div className="details">
                <h1 className="productDetailTitle">{product.name}</h1>
                <h3 className="productOwner">De {product.owner ? product.owner.username : "..."}</h3>
                <p className="productDetailDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <span className="productDetailPrice">{product.price} FCFA</span>
                <div className="addToCart">
                    <div className="quantity">
                        <span className="filterText">Quantité : </span>
                        <select name="quantity" className="filterProduct" onChange={handleQuantity}>
                            <option value="1" className="filterMethod">1 Kilos</option>
                            <option value="2" className="filterMethod">2 Kilos</option>
                            <option value="3" className="filterMethod">3 Kilos</option>
                            <option value="4" className="filterMethod">4 Kilos</option>
                            <option value="5" className="filterMethod">5 Kilos</option>
                            <option value="10" className="filterMethod">10 Kilos</option>
                        </select>
                    </div>
                    <button className="addToCartButton" onClick={handleClick}>Ajouter au panier</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
