import React from 'react';
import './lwidget.css';
import WidgetList from "./widgetList/WidgetList";

export default function Lwidget() {
    return (
        
        <div className="lwidget">
           <span className="lwidgetTitle">Commentaires</span>
           <ul className="lwidgetList">
                <WidgetList widgetName="Itadori" commentary="Produit frais et de qualité" widgetImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAUg_8qHUV6kdFVpHq6DkLfMT7WSiD-J_dp7esk7LQDUPs1PUo3irzxjU19IUCayZ4lQ&usqp=CAU"/>
                <WidgetList widgetName="Nobara" commentary="Fresh and juicy" widgetImage="https://i.pinimg.com/736x/20/57/94/20579428609849d16f7a8f62632d8a93.jpg"/>
           </ul>
        </div>
    )
}
