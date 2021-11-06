import React, { useState, useEffect} from 'react';
import "./stock.css";
import { Link, useParams } from "react-router-dom";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Publish } from "@mui/icons-material";
import axios from 'axios';


export default function Stock() {

    const [product, setProduct] = useState({})
    const { stockId } = useParams()
    useEffect(() =>{
        
        const loadData = async () => {
            try{

                const response = await axios.get(`http://localhost:3001/api/v3/products/${stockId}`);

                setProduct(response.data)

            }catch(error){
                console.error(error);
            } 
        }

        loadData()

    },[])

    async function updateProduct (e) {
        e.preventDefault();
        const products = {};
    
        const name = document.querySelector('input[name=name]').value;
        const stock = document.querySelector('input[name=stock]').value;
        const price = document.querySelector('input[name=price]').value;

        if(name.trim().length !==0) {
            products.name = name
        }

        if(stock.trim().length !==0) {
            products.stock = stock
        }

        if(price.trim().length !==0) {
            products.price = price
        }
        
        
        try {
            
            const response = await axios.put(`http://localhost:3001/api/v3/products/${stockId}` ,products);
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
    
    }

    const stock = [
        {
            name: 'Jan',
            sale: 21,
        },
        {
            name: 'Fev',
            sale: 10,
        },
        {
            name: 'Mars',
            sale: 5,
        }
      ];
    return (
        <div className="stock">
            <div className="stockTitleContainer">
                <h1 className="stockTitle">Stock</h1>
                <Link to="/newstockage">
                    <button className="addButton">Create</button>
                </Link>
            </div>
            <div className="stockTop">
                <div className="stockTopLeft">
                    <ResponsiveContainer width="100%" aspect={4/1}>
                        <LineChart data={stock}>
                            <XAxis dataKey="name" stroke="#5550bd"/>
                            <Line type="monotone" stroke="#38A3A5" dataKey="sale" activeDot={{ r: 8 }}/>
                            <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="stockTopRight">
                    <div className="stockInfoTop">
                        <img className="stockInfoImg" src={`http://localhost:3001/api/v3/image/${stockId}/product`} alt="..."/>
                        <span className="stockName">{product.name}</span>
                    </div>
                    <div className="stockInfoBottom">
                        <div className="stockInfoItem">
                            <span className="stockInfoKey">id : </span>
                            <span className="stockInfoValue">{product._id}</span>
                        </div>
                        <div className="stockInfoItem">
                            <span className="stockInfoKey">quantité : </span>
                            <span className="stockInfoValue">{product.stock}</span>
                        </div>
                        <div className="stockInfoItem">
                            <span className="stockInfoKey">Prix unitaire : </span>
                            <span className="stockInfoValue">{product.price}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stockBottom">
                <form className="editForm">
                    <div className="formLeft">
                        <label>Nom produit</label>
                        <input type="text" name="name"  placeholder={product.name} />
                        <label>Quantité</label>
                        <input type="text" name="stock" placeholder={product.stock} />
                        <label>Prix Unitaire</label>
                        <input type="text" name="price" placeholder={product.price} />
                    </div>
                    <div className="formRight">
                        <div className="upload">
                            <img className="formImg" src={`http://localhost:3001/api/v3/image/${stockId}/product`} alt="..." />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display : "none"}} />
                        </div>
                        <button className="updateBtn" onClick={updateProduct}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
