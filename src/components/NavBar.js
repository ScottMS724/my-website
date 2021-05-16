import React from 'react' 
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="ui clearing segment ui inverted segment">
            <div className="ui right floated header">
                <Link to='/home' className="item fontsize20">
                    Home<span> &nbsp; </span>
                </Link>

                <Link to='/about' className="item fontsize20">
                    About<span> &nbsp; </span>
                </Link>

                <Link to='/projects' className="item fontsize20">
                    Projects<span> &nbsp; </span>
                </Link>
                
                <Link to='/contact' className="item fontsize20">
                    Contact <span> &nbsp; </span>
                </Link>
            </div>
            <div className="ui left floated header ui orange header">
                <h1>Scott Silverman</h1>
            </div>
        </div>
    );
};

export default NavBar; 