import React from "react";

function NavbarMenu() {
    const myLists = ['Главная', 'Samsung', 'Гаджеты', 'Сервисы']
    
    return (
        <>
            <ul className='menu-ul'>
                {myLists.map((item, index) => <li className='menu-li' key={index}>{item}</li>)}
            </ul>
        </>
    )
}

export default NavbarMenu