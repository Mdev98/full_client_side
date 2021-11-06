import React from 'react';
import './transaction.css';

import { DataGrid } from '@mui/x-data-grid';
import { Visibility } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Transaction() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'username', headerName: 'Username', width: 200 , renderCell : (params) => {
            return(
                <div className="transactionList">
                    <img className="transListImage" src={params.row.avatar} alt="user avatar" />
                    {params.row.username}
                </div>
            )
         }},
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'transaction', headerName: 'Transaction',width: 160 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'action', headerName: 'Action',renderCell: (params) => {
            return(
                <>
                    <Link to={"/transaction/" + params.row.id}>
                        <button className="userListMore">
                            <Visibility />
                        </button>
                    </Link>
                </>
            );
        }, width: 120 }
      ];
      
      const rows = [
        { 
            id: 1, 
            username: 'Itadori', 
            avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAUg_8qHUV6kdFVpHq6DkLfMT7WSiD-J_dp7esk7LQDUPs1PUo3irzxjU19IUCayZ4lQ&usqp=CAU",
            email : "yuji@jujutsu.com",
            transaction : "15,000FCFA",
            status : "reçu"
        },
        { 
            id: 2, 
            username: 'Nobara', 
            avatar : "https://i.pinimg.com/736x/20/57/94/20579428609849d16f7a8f62632d8a93.jpg",
            email : "nobara@jujutsu.com",
            transaction : "15,000FCFA",
            status : "reçu"
        },
        { 
            id: 3, 
            username: 'Megumi', 
            avatar : "https://pbs.twimg.com/profile_images/1325912026313613313/x35EdnGL.jpg",
            email : "megumi@jujutsu.com",
            transaction : "15,000FCFA",
            status : "reçu"
        },
        { 
            id: 4, 
            username: 'Gojo', 
            avatar : "https://i.pinimg.com/474x/c9/6b/af/c96bafc33bf302ee79cf0964663a33f3.jpg",
            email : "gojo@jujutsu.com",
            transaction : "15,000FCFA",
            status : "reçu"
        },
        { 
            id: 5, 
            username: 'Gojo', 
            avatar : "https://i.pinimg.com/474x/c9/6b/af/c96bafc33bf302ee79cf0964663a33f3.jpg",
            email : "gojo@jujutsu.com",
            transaction : "15,000FCFA",
            status : "reçu"
        },
        { 
            id: 6, 
            username: 'Gojo', 
            avatar : "https://i.pinimg.com/474x/c9/6b/af/c96bafc33bf302ee79cf0964663a33f3.jpg",
            email : "gojo@jujutsu.com",
            transaction : "15,000FCFA",
            status : "reçu"
        },
        { 
            id: 7, 
            username: 'Gojo', 
            avatar : "https://i.pinimg.com/474x/c9/6b/af/c96bafc33bf302ee79cf0964663a33f3.jpg",
            email : "gojo@jujutsu.com",
            transaction : "15,000FCFA",
            status : "reçu"
        },
        { 
            id: 8, 
            username: 'Gojo', 
            avatar : "https://i.pinimg.com/474x/c9/6b/af/c96bafc33bf302ee79cf0964663a33f3.jpg",
            email : "gojo@jujutsu.com",
            transaction : "15,000FCFA",
            status : "reçu"
        },
        { 
            id: 9, 
            username: 'Gojo', 
            avatar : "https://i.pinimg.com/474x/c9/6b/af/c96bafc33bf302ee79cf0964663a33f3.jpg",
            email : "gojo@jujutsu.com",
            transaction : "15,000FCFA",
            status : "reçu"
        },
      ];

    return (
        <div className="transaction">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
