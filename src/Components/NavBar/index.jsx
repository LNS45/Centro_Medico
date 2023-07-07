import { styled } from "styled-components";
import './NavBar.css';
import Logo from "./Logo";
import Links from "./Links";

const NavBar = () => {

    return <div className="NavBar_Container">
        <Logo />
        <Links />
    </div>
};

export default NavBar;