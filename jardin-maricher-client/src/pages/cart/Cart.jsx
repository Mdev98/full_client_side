import './cart.css';
import Navbar from '../../components/navbar/Navbar';
import Newsletter from '../../components/newsletter/Newsletter';

const Cart = () => {
    return (
        <div className="cart">
            <Navbar />
            <div className="wrapper">
                <h1 className="cartTitle">Votre Panier</h1>
                <div className="cartTop">
                    <button className="cartTopButton btnL">Retour au marché</button>
                    <div className="cartTopTexts">
                        <span className="cartTopTextContent">Commandes (2)</span>
                    </div>
                    <button className="cartTopButton btnR">Acheter maintenant</button>
                </div>
                <div className="cartBottom">
                    <div className="cartInfo">
                        <div className="cartInfo-product">
                            <div className="cartInfo-productDetail">
                                <img  className="cartInfo-productImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxt3ExNOomM-lGOsgMpc72Z1o2whih64Ll7Q&usqp=CAU" alt=".."/>
                                <div className="cartInfo-productDetailInfo">
                                   <span className="cartInfo-productId"><b>ID:</b> 42523452</span>
                                    <span className="cartInfo-productName"><b>Produit:</b> Pomme</span>
                                    <span className="cartInfo-productQunatity"><b>Quantity:</b> 2 kilos</span>
                                    <span className="cartInfo-productOwner"><b>Fournisseur:</b> Gojo-Fruits</span> 
                                </div>
                                
                            </div>
                            <div className="cartInfo-productPrice">
                                <h3>2500</h3><span className="xaliss">CFA</span>
                            </div>
                        </div>  
                        <div className="cartInfo-product">
                            <div className="cartInfo-productDetail">
                                <img  className="cartInfo-productImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxt3ExNOomM-lGOsgMpc72Z1o2whih64Ll7Q&usqp=CAU" alt=".."/>
                                <div className="cartInfo-productDetailInfo">
                                   <span className="cartInfo-productId"><b>ID:</b> 42523452</span>
                                    <span className="cartInfo-productName"><b>Produit:</b> Pomme</span>
                                    <span className="cartInfo-productQunatity"><b>Quantity:</b> 2 kilos</span>
                                    <span className="cartInfo-productOwner"><b>Fournisseur:</b> Gojo-Fruits</span> 
                                </div>
                                
                            </div>
                            <div className="cartInfo-productPrice">
                                <h3>2500</h3><span className="xaliss">CFA</span>
                            </div>
                        </div>  
                    </div>
                    <div className="cartSummary">
                        <h1 className="summaryTitle"> Resumé Commande</h1>
                        <div className="cartSummaryDetail">
                            <span className="cartSummaryDetail-text">Livraison : </span>
                            <span className="cartSummaryDetail-price">2000 FCFA</span>
                        </div>
                        <div className="cartSummaryDetail">
                            <span className="cartSummaryDetail-text">Montant Total : </span>
                            <span className="cartSummaryDetail-price">7000 FCFA</span>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
        </div>
    )
}

export default Cart
