import React from "react";

import './CardPhone.css'

import Samsung from "./allPhone.js/Samsung";
import Notebook from "./allPhone.js/Notebook";
import Iphone from "./allPhone.js/Iphone";
import Planshet from "./allPhone.js/Planshet";

function CardPhone(props) {
    return (
        <>
            <Samsung search={props.search} setSearch = {props.setSearch}/>
            <Notebook search={props.search} setSearch = {props.setSearch} />
            <Iphone search={props.search} setSearch = {props.setSearch} />
            <Planshet search={props.search} setSearch = {props.setSearch} />
        </>

    )
}

export default CardPhone


