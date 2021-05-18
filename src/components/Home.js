import React from 'react' 
import Headshot from '../nanheadshot.jpg'

const Home = () => {
    return (
        <div className="ui segment">
            <h1>Home</h1>
            <div className="ui two column very relaxed grid">
                <div className="column">
                    <img className="headshotsize" src={Headshot} alt=""/>
                </div>
                <div className="column">
                    <p className="fontsize30">Hi, my name is Scott Silverman. I'm a full stack web developer from New York. Welcome to my website. 
                    Please click the links above to learn more about me, some recent projects I have programmed, and how to contact.</p>
                </div>
            </div>
        </div>
    );
};

export default Home; 