import React from 'react';
import "./widgetItem.css";

export default function WidgetItem(props) {
    
    return (
        <div className="lwidgetItem">
            <span className="lwidgetItemName">{props.name}</span>
            <p className="lwidgetItemComs" style={{color : "#7FC8A9"}}>{props.comment}</p> 
        </div>
    )
}
