import "./boxinfo.css";
import React from "react";
import Balance from "./info/Balance";
import Sales from "./info/Sales";
import Order from "./info/Order";



export default function BoxInfo(props) {
    return (
        <div className="box">
            <Balance data={props.info.income} />
            <Sales data={props.info.sales} />
            <Order data={props.info.order} />
        </div>
    )
}
