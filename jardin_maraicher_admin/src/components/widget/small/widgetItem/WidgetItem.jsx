import React from 'react';
import "./widgetItem.css";

export default function WidgetItem(props) {
    function shipping() {
        if(props.status === "En attente de livraison"){
            return true
        }else{
            return false
        }
    }
    return (
        <div className="widgetItem">
            <span className="widgetItemName">Commande nº{props.commandeName}</span>
            <span className="widgetItemStatus" style={shipping() ? {color : "#77D970"} : {color : "#B61919"} }>{props.status}</span> 
        </div>
    )
}
