import React, { useState, useEffect } from 'react';
import './widget.css';
import WidgetList from './widgetList/WidgetList';
import axios from 'axios'

export default function Swidget() {
    const [orders, setOrders] = useState([])

    useEffect(() =>{

        const loadData = async () => {
           

            try{
                const response = await axios.get("http://localhost:3001/api/v3/seller/order")
 
                setOrders(response.data)

            }catch(error){
                console.error(error);
            }
            
        }
        loadData()
    },[])
    function createItem(data){
        return <WidgetList widgetCommandeName={data.customerId} widgetImage={`http://localhost:3001/api/v3/${data.customerId}/profile`} commandeStatus="En attente de livraison"/> 
    }
    return (
        <div className="swidget">
           <span className="widgetTitle">Etat Commande</span>
           <ul className="widgetList">
                {orders.map(createItem)}
           </ul>
        </div>
    )
}
