import React from 'react';
import "./widgetList.css";
import WidgetItemImage from "../widgetItemImage/WidgetItemImage";
import WidgetItem from '../widgetItem/WidgetItem';
import WidgetItemLogo from '../widgetItemLogo/WidgetItemLogo';


export default function WidgetList(props) {
    return (
        <li className="widgetListItem">
            <WidgetItemImage imgUrl={props.widgetImage} />
            <WidgetItem commandeName={props.widgetCommandeName} status={props.commandeStatus}/>
            <WidgetItemLogo status={props.commandeStatus}/>
        </li>
    )
}
