import React from 'react'
import "./widgetItemImage.css";

export default function WidgetItemImage(props) {
    return (
        <img className="widgetItemImage" src={props.imgUrl} alt="userprofilepicture" />
    )
}
