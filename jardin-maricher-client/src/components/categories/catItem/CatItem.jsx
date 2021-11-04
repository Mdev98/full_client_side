import React from 'react';
import { Link } from "react-router-dom";

const CatItem = (props) => {
    return (
        <div className="catItem">
            <Link to={`/products/${props.cat}`}>
                <img src={props.img} alt=".." className="catImg"/>
                <button className="catTitle">{props.title}</button>
            </Link>
        </div>
    )
}

export default CatItem
