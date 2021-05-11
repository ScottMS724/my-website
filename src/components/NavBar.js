import React from 'react' 
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="ui clearing segment ui inverted segment">
            <div className="ui right floated header">
                <Link to='/home' className="item font20">
                    Home<span> &nbsp; </span>
                </Link>

                <Link to='/about' className="item font20">
                    About<span> &nbsp; </span>
                </Link>

                <Link to='/projects' className="item font20">
                    Projects<span> &nbsp; </span>
                </Link>
                
                <Link to='/contact' className="item font20">
                    Contact
                </Link>
            </div>
            <div className="ui left floated header ui orange header">
                <h1>Scott Silverman</h1>
            </div>
        </div>
    );
};

export default NavBar; 