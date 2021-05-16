import React from 'react' 
import Headshot from '../nanheadshot.jpg'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>

            <p>Hi, my name is Scott Silverman. I'm a full stack web developer from New York. Welcome to my website.</p>

            <img src={Headshot} alt="picture" />

            <p>Please click the links above to learn more about me, some recent apps I have programmed, and how to contact.</p>
        </div>
    );
};

export default Home; 