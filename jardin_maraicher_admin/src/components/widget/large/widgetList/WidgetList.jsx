import React from 'react';
import "./widgetList.css";
import WidgetItemImage from "../widgetItemImage/WidgetItemImage";
import WidgetItem from '../widgetItem/WidgetItem';


export default function WidgetList(props) {
    return (
        <li className="lwidgetListItem">
            <WidgetItemImage imgUrl={props.widgetImage} />
            <WidgetItem name={props.widgetName} comment={props.commentary}/>
        </li>
    )
}
