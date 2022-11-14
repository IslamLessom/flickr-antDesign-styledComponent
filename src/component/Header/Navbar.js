import React from 'react';

import './Navbar.css'
import Basket from './Basket';
import NavbarMenu from './NavbarMenu';



function Navbar() {

    return (
        <div className='navbar'>
            <div className='logo'>
                <h1>Samsung RD</h1>
            </div>
            <NavbarMenu />
            <Basket />
        </div>
    );
};

export default Navbar