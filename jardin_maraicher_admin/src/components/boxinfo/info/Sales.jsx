import React from 'react';

import "./info.css";

import { Timeline } from "@mui/icons-material";

const style = {
    fontSize : "3rem"
}

export default function Sales(props) {
    return (
        <div className="boxItem">
            <Timeline style={style}/>
            <div>
                <h3 className="boxItemName">Ventes</h3>
                <span className="boxItemData">{props.data}</span>
            </div>
        </div>
    )
}
