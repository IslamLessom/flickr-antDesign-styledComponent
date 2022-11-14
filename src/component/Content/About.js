import React from "react";

import './About.css'

import check from '../../images/check.png'

function About() {
    return (
        <div className="about">
            <h1>Почему выбирают Samsung ?</h1>
            <div className="all-about">
                <div className="about-check">
                    <img src={check} />
                    <div className="text-about">
                        <h3>Гарантия</h3>
                        <p>Здесь вы получите гарантию <br /> на облуживание вашего <br />телфона</p>
                    </div>
                </div>
                <div className="about-check">
                    <img src={check} />
                    <div className="text-about">
                        <h3>Гарантия</h3>
                        <p>Здесь вы получите гарантию <br /> на облуживание вашего <br />телфона</p>
                    </div>
                </div>
                <div className="about-check">
                    <img src={check} />
                    <div className="text-about">
                        <h3>Гарантия</h3>
                        <p>Здесь вы получите гарантию <br /> на облуживание вашего <br />телфона</p>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default About
