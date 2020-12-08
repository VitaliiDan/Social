import react, {Component} from 'react';
import classes from './Header.module.css';
import logo from './img/logo.jpeg';
const Header = () => {
    return (
        <header className={classes.header}>
            <img src={logo} alt=""/>
        </header>
    );
}

export default Header;