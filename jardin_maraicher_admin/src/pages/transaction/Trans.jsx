import React from 'react';
import "./trans.css";

export default function Trans() {
    return (
        <div className="trans">
            <div className="titleContainer">
                <h1 className="Title">Détails transaction</h1>
            </div>
            <div className="transContainer">
                <div className="transShow">
                    <div className="transShowTop">
                        <img src="https://i.pinimg.com/474x/c9/6b/af/c96bafc33bf302ee79cf0964663a33f3.jpg" alt="avatar" className="usrImage"/>
                        <div className="top">
                            <span className="usrName">Gojo Satoru</span>
                        </div>
                    </div>
                    <div className="detail" >
                        <div className="infos"><h3>Commande : </h3><span>23rkjadasdfn3</span></div>
                        <div className="infos"><h3>Produit : </h3><span>Banane</span></div>
                        <div className="infos"><h3>Quantité : </h3><span>4kg</span></div>
                        <div className="infos"><h3>Montant : </h3><span>15,000 FCFA</span></div>
                        <div className="infos"><h3>Date : </h3><span>04/02/21</span></div>
                        <div className="infos"><h3>Status : </h3><span>Livrée</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
