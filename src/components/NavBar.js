import React from 'react' 
import Link from './Link'

const NavBar = () => {
    return (
        <div className="ui secondary pointing menu">
            <a href="/">
                Home
            </a>
            <a href="/about">
                About
            </a>
            <a href="/projects">
                Projects
            </a>
            <a href="/contact">
                Contact
            </a>
        </div>
    );
};

export default NavBar; 