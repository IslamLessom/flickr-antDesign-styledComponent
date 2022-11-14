import React from "react";

import { ShoppingCartOutlined } from '@ant-design/icons'

function Basket() {
    return (
        <>
            <div className='basket-all'>
                <ShoppingCartOutlined className='basket' />
                <h2>9000p</h2>
            </div>
        </>
    )
}

export default Basket