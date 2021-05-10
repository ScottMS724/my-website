import React from 'react' 
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="ui secondary pointing menu">
            <div className="right menu">
                <Link to='/home' className="item">
                    Home
                </Link>

                <Link to='/about' className="item">
                    About
                </Link>

                <Link to='/projects' className="item">
                    Projects
                </Link>
                
                <Link to='/contact' className="item">
                    Contact 
                </Link>
            </div>
        </div>
    );
};

export default NavBar; 