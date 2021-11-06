import React from 'react';
import { Store, AddShoppingCart, TrendingUp, Storage } from "@mui/icons-material";
import { NavLink } from 'react-router-dom';
import './sidebar.css';


export default function SidebarList() {    
    

    return (
        <ul className="sidebarList">
            <li>
                <NavLink to="/home" className="lien" activeClassName="sidebarListItem active">    
                    <Store /> <span className="itemText">Accueil</span>   
                </NavLink>
            </li>
            <li>
                <NavLink to="/stockages" className="lien"  activeClassName="sidebarListItem active">
                    <Storage /> <span className="itemText">Stockage</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/transactions" className="lien" activeClassName="sidebarListItem active">
                    <TrendingUp /> <span className="itemText">Transaction</span>
                </NavLink> 
            </li>
            <li>
                <NavLink to="/commandes" className="lien" activeClassName="sidebarListItem active">
                    <AddShoppingCart /> <span className="itemText">Commande</span>
                </NavLink>
            </li>
        </ul>
    )
}
