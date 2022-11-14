import React, {useState} from "react";

import PhoneData from '../../../../db/Planchet.json'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Notebook(props) {
    const searchName = props.search
    const setSearchName = props.setSearch

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    
    return (
        <>
            <div className="phone-columns">
                <Carousel responsive={responsive}>
                    {PhoneData.filter((val) => {
                        if (searchName == "") {
                            return val
                        } else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
                            return val
                        }
                    }).map((val, index) => {
                        return (
                            <div className="card-phone" key={index}>
                                <div className="new-or-old-phone">
                                    <p className="small-or-big"><b>{val.about.condition.smallCondition}</b></p>
                                    <p className="dash">-</p>
                                    <p><b>{val.about.condition.fulCondition}</b></p>
                                </div>
                                <img className="phone-img" src={val.images} />
                                <div className="name-and-description">
                                    <h1>{val.name}</h1>
                                    <p>{val.description}</p>
                                </div>
                                <div className="all-small-des">
                                    <div className="small-des">
                                        <p className="small-name"><b>{val.about.specification.smallNameOne}</b></p>
                                        <p className="dash">-</p>
                                        <p><b>{val.about.specification.fullNameOne}</b></p>
                                    </div>
                                    <div className="small-des">
                                        <p className="small-name"><b>{val.about.specification.smallNameTwo}</b></p>
                                        <p className="dash">-</p>
                                        <p><b>{val.about.specification.fullNameTwo}</b></p>
                                    </div>
                                </div>
                                <div className="price-and-button">
                                    <h1>{val.price}р</h1>
                                    <button>В корзину</button>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>

        </>
    )
}

export default Notebook