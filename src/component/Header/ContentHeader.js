import React from "react";

import './ContentHeader.css'

import backImages from '../../images/s21.png'


function ContentHeader() {
    return (
        <div className="content-header">
            <img  src={backImages}></img>
            <div className="text">
                <h1>Твой новый гаджет <br /> с доставкой на дом</h1>
                <h2>Онлайн магазин <br />электроники , поможет <br /> найти вам мошный Samsung <br />и не только </h2>
            </div>
            <div className="button-content">
                <button><h2>Искать Samsung</h2></button>
            </div>
            
        </div>
    )
}

export default ContentHeader