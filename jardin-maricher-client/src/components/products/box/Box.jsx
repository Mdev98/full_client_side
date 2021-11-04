import { FavoriteBorderOutlined, SearchOutlined, ShoppingBagOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import '../products.css';



const Box = (props) => {
    return (
        <div className="productBox">
            <img className="productImage" src={`http://localhost:3001/api/v3/image/${props.id}/product`} alt="..." />
            <div className="productBoxTools">

                <Link to={`/product/${props.id}`} style={{color : "black", width:"30px", height:"30px"}}><ShoppingBagOutlined /></Link>
                

                <Link to={`/product/${props.id}`} style={{color : "black", width:"30px", height:"30px"}}>
                    <SearchOutlined />
                </Link>
            
                <Link to={`/product/${props.id}`} style={{color : "black", width:"30px", height:"30px"}}><FavoriteBorderOutlined /></Link>
                
            </div>
            <div className="productBoxInfo">
                <span>{props.name}</span>
                <div className="pricing"><h3>{props.price}</h3><span>FCFA/Kilos</span></div>
                <span>{props.owner}</span>
            </div>
        </div>
    )
}

export default Box
