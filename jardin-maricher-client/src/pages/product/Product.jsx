import './product.css';
import Navbar from '../../components/navbar/Navbar';
import Newsletter from '../../components/newsletter/Newsletter';
import ProductDetails from './productDetails/ProductDetails';

import { ArrowLeft } from "@mui/icons-material"



const Product = () => {

    

    return (
        <div className="product">
            <Navbar />
            <span className="return"> <ArrowLeft /> Retour</span>
            <ProductDetails/>
            <Newsletter />
        </div>
    )
}

export default Product
