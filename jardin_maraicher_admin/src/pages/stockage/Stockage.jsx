import React, { useState, useEffect } from 'react';
import './stockage.css';

import { DataGrid } from '@mui/x-data-grid';
import { Visibility, DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Stockage() {

    const [products, setProducts] = useState([])

    useEffect(() =>{
        const product = []

        const loadData = async () => {
            try{
                const response = await axios.get("http://localhost:3001/api/v3/me/products");
                const arr = response.data.productList
                arr.forEach((item) => {
                    const { _id : id, name, price, category} = item;
                    const data = {
                        id,
                        name,
                        price,
                        category
                    }
                    product.push(data)
                })

                setProducts(product)
            }catch(error){
                console.error(error);
            }
            
        }
        loadData()
    },[])
    
    console.log(products)

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Produits', width: 200 , renderCell : (params) => {
            return(
                <div className="transactionList">
                    <img className="transListImage" src={`http://localhost:3001/api/v3/image/${params.row.id}/product`} alt="user avatar" />
                    {params.row.name}
                </div>
            )
         }},
        { field: 'price', headerName: 'Prix par Kilos',width: 160 },
        { field: 'category', headerName: 'Categorie', width: 120 },
        { field: 'action', headerName: 'Action',renderCell: (params) => {
            return(
                <>
                    
                    <DeleteOutline onClick={() => handleDelete(params.row.id)} className="userListDelete" style={{color : "red"}} />
                    
                    <Link to={"/stockage/" + params.row.id}>
                        <button className="userListMore">
                            <Visibility />
                        </button>
                    </Link>
                    
                </>
            );
        }, width: 120 }
      ];

    const stocks = [
        { 
            id: 1, 
            name: "Orange", 
            avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqNoxxUIFIdfx01h90lp_2fnV7fnh-3kGuA&usqp=CAU",
            quantité : 255,
            prix : "700",
            status : "en stock"
        },
        { 
            id: 2, 
            name: "Orange", 
            avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqNoxxUIFIdfx01h90lp_2fnV7fnh-3kGuA&usqp=CAU",
            quantité : 255,
            prix : "700",
            status : "en stock"
        },
        { 
            id: 3, 
            name: "Orange", 
            avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqNoxxUIFIdfx01h90lp_2fnV7fnh-3kGuA&usqp=CAU",
            quantité : 255,
            prix : "700",
            status : "en stock"
        },
        { 
            id: 4, 
            name: "Orange", 
            avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqNoxxUIFIdfx01h90lp_2fnV7fnh-3kGuA&usqp=CAU",
            quantité : 255,
            prix : "700",
            status : "en stock"
        },
        { 
            id: 5, 
            name: "Orange", 
            avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqNoxxUIFIdfx01h90lp_2fnV7fnh-3kGuA&usqp=CAU",
            quantité : 255,
            prix : "700",
            status : "en stock"
        },
        { 
            id: 6, 
            name: "Orange", 
            avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqNoxxUIFIdfx01h90lp_2fnV7fnh-3kGuA&usqp=CAU",
            quantité : 255,
            prix : "700",
            status : "en stock"
        },
        { 
            id: 7, 
            name: "Orange", 
            avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqNoxxUIFIdfx01h90lp_2fnV7fnh-3kGuA&usqp=CAU",
            quantité : 255,
            prix : "700",
            status : "en stock"
        }
    ];

    const handleDelete = async (id) => {
        setProducts(products.filter((product) => product.id !== id))
        try {
            const response = await axios.delete(`http://localhost:3001/api/v3/products/${id}`);
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className="stockage">
            <DataGrid
                rows={products}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
 