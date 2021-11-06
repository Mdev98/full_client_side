import React from 'react';
import "./widgetItemLogo.css";

import { DeliveryDining, CancelScheduleSend } from "@mui/icons-material";

export default function WidgetItemLogo(props) {
    return (
        <div className="widgetItemLogo">
            {props.status === "En attente de livraison" ? <DeliveryDining style={{color : "#77D970", fontSize : "1.6rem"}}/> : <CancelScheduleSend style={{color : "#B61919", fontSize : "1.6rem"}}/>}
            
        </div>
    )
}
