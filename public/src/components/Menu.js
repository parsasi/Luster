
import React from 'react';
import '../styles/menu.css'
import {Link, NavLink } from 'react-router-dom';


export default (props) => (
    <div class="menu">
            <div class="menu_logo">
                <img src="imgs/logo.svg" />
            </div>
            <ul class="menu_links">
                <li><NavLink className="menu-nav-link" activeClassName="active-link" to="/">Profile</NavLink></li>
                <li><NavLink className="menu-nav-link" activeClassName="active-link" to="/">Discovery</NavLink></li>
                <li><NavLink className="menu-nav-link" activeClassName="active-link" to="/">Messages</NavLink></li>
                <li><NavLink className="menu-nav-link" activeClassName="active-link" to="/faq">FAQ/Help</NavLink></li>
                <li><NavLink className="menu-nav-link" activeClassName="active-link" to="/">Terms of Use</NavLink></li>
                <li><NavLink className="menu-nav-link" activeClassName="active-link" to="/">Privacy Policy</NavLink></li>
                <li><NavLink className="menu-nav-link" activeClassName="active-link" to="/contact">Contact Us</NavLink></li>
                <li><NavLink className="menu-nav-link" activeClassName="active-link" to="/">Logout</NavLink></li>
            </ul>
        </div>
)