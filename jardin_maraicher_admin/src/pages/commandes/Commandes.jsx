import React, { useEffect, useState } from 'react';
import './commandes.css';

import { DataGrid } from '@mui/x-data-grid';
import { Send } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Commandes() {

    const [orders, setOrders] = useState([])

    useEffect(() =>{
        
        const loadOrders = async () => {
            try{

                const response = await axios.get(`http://localhost:3001/api/v3/seller/order`);

                console.log(response.data)

                setOrders(response.data)

            }catch(error){
                console.error(error);
            } 
        }

        loadOrders()

    },[])

    const columns = [
        { field: 'id', headerName: 'nº', width: 90 },
        { field: 'orderId', headerName: 'Commande', width: 90 },
        { field: 'customerName', headerName: 'Client', width: 200 , renderCell : (params) => {
            return(
                <div className="transactionList">
                    <img className="transListImage" src={`http://localhost:3001/api/v3/${params.row.customerId}/profile`} alt="user avatar" />
                    {params.row.customerName}
                </div>
            )
         }},
        { field: 'productName', headerName: 'Produit', width: 200 },
        { field: 'quantity', headerName: 'Quantité',width: 130 },
        { field: 'amount', headerName: 'Montant', width: 120 },
        { field: 'customerShippingAdress', headerName: 'Adresse de Livraison', width: 200 },
        { field: 'action', headerName: 'Action',renderCell: (params) => {
            return(
                <>
                    <Link to={"/commande/" + params.row.id}>
                        <button className="userListMore">
                            <Send />
                        </button>
                    </Link>
                </>
            );
        }, width: 120 }
      ];
      
      const rows = [
        { 
            id: 1, 
            username : "Yuji Itadori",
            avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAUg_8qHUV6kdFVpHq6DkLfMT7WSiD-J_dp7esk7LQDUPs1PUo3irzxjU19IUCayZ4lQ&usqp=CAU",
            produit: 'Orange', 
            quantite : "10",
            montant : "15,000 FCFA",
            payement : "Cash",
            adresse : "Ouakam, cité assemblée",
            status : "En attente"
        },
        { 
            id: 2, 
            username : "Yuji Itadori",
            avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAUg_8qHUV6kdFVpHq6DkLfMT7WSiD-J_dp7esk7LQDUPs1PUo3irzxjU19IUCayZ4lQ&usqp=CAU",
            produit: 'Banane', 
            quantite : "5",
            montant : "7,000 FCFA",
            payement : "Cash",
            adresse : "Ouakam, cité assemblée",
            status : "En attente"
        }
      ];

    return (
        <div className="commande">
            <DataGrid
                rows={orders}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

