import React, { useState } from "react";
import CardPhone from "./CardPhone";

import './Catalog.css'

function Catalog(props) {
    const [searchName, setSearchName] = useState('')

    return (
        <div className="catalog">
            <h1 className="name-h1-catalog">Каталог товаров</h1>
            <input className="input-search" type="text" placeholder="Поиск товаров" onChange={event => { setSearchName(event.target.value) }} />
            <CardPhone search={searchName} setSearch={setSearchName}/>
        </div>
    )

}

export default Catalog