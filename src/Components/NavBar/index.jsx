'use client';
import './NavBar.css';
import Logo from "./Logo";
import Links from "./Links";
import { useState } from 'react';
import Menu from './Menu';


const NavBar = () => {
    const [menuActive, setMenuActive] = useState(false);

    return <div className="NavBar_Container">
        <Logo />
        <Links />
        {(menuActive == true) ? <Menu /> : <></>}
        <button onClick={() => setMenuActive(!menuActive)}></button>
    </div>
};

export default NavBar;