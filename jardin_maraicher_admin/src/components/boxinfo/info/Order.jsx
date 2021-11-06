import React from 'react';

import "./info.css";

import { AddShoppingCart } from "@mui/icons-material";

const style = {
    fontSize : "3rem"
}

export default function Order(props) {
    return (
        <div className="boxItem">
            <AddShoppingCart style={style}/>
            <div>
                <h3 className="boxItemName">Commandes</h3>
                <span className="boxItemData">{props.data}</span>
            </div>
        </div>
    )
}
