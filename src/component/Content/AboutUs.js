import React from "react";

import './AboutUs.css'

import imagesBack from '../../images/galaxy-s22-ultra_about-us.webp'

function AboutUs() {
    return (
        <>
            <div className="about-us">
                <img src={imagesBack} />
                <h1>Наша история</h1>
                <h2>Как мы начинали ?</h2>
                <h4>В первое время мы <br /> продавали самсунги на<br /> авито , и знакомым , позже<br /> , когда спрос вызрос мы<br /> открыли свою точку в<br /> городе и заодно создали<br /> этот замечательный сайт</h4>

                <h2>Что в будушем ?</h2>
                <h4>В будушем мы<br /> планируем открывать<br /> сеть магазинов Samsung<br /> RD , по всему Дагестану</h4>

                <h2>Что имеем сейчас ?</h2>
                <h4>Сейчас планируется<br /> открытие одной точки в<br /> городе .</h4>

                <h1 className="samsung-rd">SAMSUNG RD</h1>
            </div>
        </>
    )
}

export default AboutUs