import react, {Component} from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink className={classes.item} to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink className={classes.item} to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink className={classes.item} to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
            <div>
                <NavLink className={classes.item} to="/video" activeClassName={classes.active}>Video</NavLink>
            </div>
            <div>
                <a className={classes.item} href="#">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;