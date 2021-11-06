import React from 'react';
import "./newStock.css";

import { Publish } from "@mui/icons-material";
import axios from 'axios';

function previewImage () {
    const file = document.querySelector("#file").files;
    if(file.length > 0){
        const fileReader = new FileReader();

        fileReader.onload = function (e) {
            document.getElementById('preview').setAttribute('src', e.target.result);
            console.log(e.target.result)
        };

        fileReader.readAsDataURL(file[0]);
    }
        
}

async function addProduct (e) {
    e.preventDefault();
    const products = {};

    let formData = new FormData();



    const name = document.querySelector('input[name=name]').value;
    const stock = document.querySelector('input[name=stock]').value;
    const price = document.querySelector('input[name=price]').value;
    const category = document.querySelector('select').value;
    const img = document.querySelector('input[type=file]').files[0]

    products.image = img


    if(name.trim().length !==0) {
        formData.append('name', name);
    }

    if(stock.trim().length !==0) {
        formData.append('stock', stock);
    }

    if(price.trim().length !==0) {
        formData.append('price', price);
    }

    if(category.trim().length !==0) {
        formData.append('category', category);
    }

    formData.append('image', img);



    
    
    
    try {
        console.log(products)
        const response = await axios.post('http://localhost:3001/api/v3/products',formData);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

}

export default function NewStock() {
    return (
        <div className="newStock">
            <h1 className="addStockTitle">Ajouter Produit</h1>
            <form className="addStockForm">
                <div className="addStockFormLeft">
                    <div className="addStockItem">
                        <label>Nom Produit</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="addStockItem">
                        <label>Quantité</label>
                        <input type="text" name="stock" />
                    </div>
                    <div className="addStockItem">
                        <label>Prix Unitaire</label>
                        <input type="text" name="price" />
                    </div>
                    <div className="addStockItem">
                        <label>Categorie</label>
                        <select style={{border:"2px solid #111", padding: "10px"}}>
                            <option value="Fruits">Fruits</option>
                            <option value="Legumes">Legumes</option>
                        </select>
                    </div>
                </div>  
                <div className="addFormRight">
                    <div>
                        <img className="formImg" id="preview" src="https://via.placeholder.com/150" alt="..." />
                        <label for="file">
                            <Publish />
                        </label>
                        <input type="file" name="image" id="file"  onChange={previewImage} style={{display : "none"}} accept="image/png, image/jpeg" />
                    </div>
                    <button className="addButton" onClick={addProduct}>Ajouter</button>
                </div>
                
            </form>
        </div>
    )
}
