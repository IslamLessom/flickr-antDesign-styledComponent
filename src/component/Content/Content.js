import { CompassOutlined } from "@ant-design/icons";
import React from "react";
import About from "./About";
import AboutUs from "./AboutUs";
import Catalog from "./Catalog/Catalog";

import './Content.css'

function Content(props) {
    return (
        <div className="content">
            <About />
            <Catalog />
            <AboutUs/>
        </div>
    )
}

export default Content
