import React from "react";
import Navbar from "./Navbar";
import ContentHeader from "./ContentHeader";

import './Header.css'

function Header() {
    return (
        <div className="header">
            <Navbar />
            <ContentHeader />
        </div>
    )    
}

export default Header