import './cart.css';
import Navbar from '../../components/navbar/Navbar';
import Newsletter from '../../components/newsletter/Newsletter';
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
require('dotenv').config();

// const KEY = process.env.REACT_APP_STRIPE;
const KEY = "pk_test_51JsV4PIzKgTcDNJqJzZA3s2Q71bqPfNWHRl5RdUCRweJFBYL2OKfhls2hEvoWSswn3OLeCU2OL2ecySfa4cyppCG00oa0dmu7g"


const Cart = () => {
    const cart = useSelector(state => state.cart )
    const quantity =  useSelector(state => state.cart.quantity);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    function redirect () {
        window.location.replace("/");
    }

    const onToken = (token) => {
        setStripeToken(token)
    }

    const temp = []

    cart.products.forEach(product => {
        const data = {
            'productId' : product._id,
            'quantity'  : product.quantity,
            'amount'    : product.price*product.quantity,
            'cartOwner'     : product.owner._id
        }

        temp.push(data)
    })
    
    useEffect(() => {
        
        const makeOrder = async () => {
            const data = {
                "cartList" : temp,
                "shipping_adress1" : stripeToken.card.address_line1,
                "city" : stripeToken.card.address_city,
                "country" : stripeToken.card.address_country,
                "phone" : "774710455"
            }
            try {
                const res = await axios.post('http://localhost:3001/api/v3/order',data)
                navigate('/')
            } catch (error) {
                console.error(error)
                navigate('/login')
            }
        }
        {stripeToken && makeOrder()}
    },[stripeToken])

    // console.log(stripeToken);
    // console.log(temp);
    return (
        <div className="cart">
            <Navbar />
            <div className="wrapper">
                <h1 className="cartTitle">Votre Panier</h1>
                <div className="cartTop">
                    <button className="cartTopButton btnL" onClick={redirect}>Retour au marché</button>
                    <div className="cartTopTexts">
                        <span className="cartTopTextContent">Commandes ({quantity})</span>
                    </div>
                    
                    <StripeCheckout
                        name="Jardin Maraicher"
                        image="https://lh3.googleusercontent.com/proxy/_cF-965AOykejSu2eQ75pAI9clKK2RmJhrLdWRPlo9l4hIYBMleB8NEfFqXDNf6mtcK6KrcdkRlewE4d8v8NVpRekQ_TFwfSxdP6WFc0SFt7OKw3GY9T3RFCgF5iSBGOEfkHSw"
                        shippingAddress
                        description={`Montant total à payer $${cart.total}`}
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey="pk_test_51JsV4PIzKgTcDNJqJzZA3s2Q71bqPfNWHRl5RdUCRweJFBYL2OKfhls2hEvoWSswn3OLeCU2OL2ecySfa4cyppCG00oa0dmu7g"
                    >
                        <button className="cartTopButton btnR" >Acheter maintenant</button>
                    </StripeCheckout>
                </div>
                <div className="cartBottom">
                    <div className="cartInfo">
                    {cart.products.map((product) =>(
                        <div className="cartInfo-product">
                            <div className="cartInfo-productDetail">
                                <img  className="cartInfo-productImage" src={`http://localhost:3001/api/v3/image/${product._id}/product`} alt=".."/>
                                <div className="cartInfo-productDetailInfo">
                                   <span className="cartInfo-productId"><b>ID:</b> {product._id}</span>
                                    <span className="cartInfo-productName"><b>Produit:</b> {product.name}</span>
                                    <span className="cartInfo-productQunatity"><b>Quantity:</b> {product.quantity} kilos</span>
                                    <span className="cartInfo-productOwner"><b>Fournisseur:</b> {product.owner.username}</span> 
                                </div>
                                
                            </div>
                            <div className="cartInfo-productPrice">
                                <h3>{product.quantity*product.price}</h3><span className="xaliss">CFA</span>
                            </div>
                        </div> 
                    ))}
                         
                    </div>
                    <div className="cartSummary">
                        <h1 className="summaryTitle"> Resumé Commande</h1>
                        <div className="cartSummaryDetail">
                            <span className="cartSummaryDetail-text">Livraison : </span>
                            <span className="cartSummaryDetail-price">2000 FCFA</span>
                        </div>
                        <div className="cartSummaryDetail">
                            <span className="cartSummaryDetail-text">Montant Total : </span>
                            <span className="cartSummaryDetail-price">{cart.total + 2000} FCFA</span>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
        </div>
    )
}

export default Cart
