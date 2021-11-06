import React from 'react';

import "./info.css";

import { AccountBalance } from "@mui/icons-material";

const style = {
    fontSize : "3rem"
}

export default function Balance(props) {
    return (
        <div className="boxItem">
            <AccountBalance style={style}/>
            <div>
                <h3 className="boxItemName">Revenus</h3>
                <span className="boxItemData">{props.data}</span>
            </div>
        </div>
    )
}
