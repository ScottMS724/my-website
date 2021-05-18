import React from 'react' 
import StadiumTracker from '../stadiumtrackerscreenshot.jpg'
import GameProfiles from '../gameprofscreenshot.jpg'
import SteamGames from '../steamgamesscreenshot.jpg'

const Projects = () => {
    return (
        <div className="ui segment">
            <h1>Projects</h1>

            <u><h3>Stadium Tracker</h3></u>
            <p className="fontsize20">This app allows for the record keeping of every professional sports stadium a user has visited. Each stadium
            is given a name, location, and picture. In addition, visits can be added to stadiums, with each visit having
            a date and description so you can look back on all the good times. Great for the road trippers that want to attend a 
            game at every stadium.</p>
            <p>Tech used: React, Redux, React Router, HTML5, CSS3, Ruby on Rails</p>
            <div className="fontsize20">
                <a href="https://github.com/ScottMS724/stadium-tracker-frontend" target="_blank" rel="noopener noreferrer">GitHub</a><span> &nbsp; </span>
                <a href="https://stadium-tracker.netlify.app/" target="_blank" rel="noopener noreferrer">Live App</a>
            </div>
            <br></br>
            <div>
                <img src={StadiumTracker} className="imgresize" alt=""/>
            </div>
            <br></br>
            <br></br>

            <u><h3>Game Profiles</h3></u>
            <p className="fontsize20">With Game Profiles, a user can create their own "game profile." A game profile has a custom picture, title, description, review, 
            and rating. Keep track of all your favorite video games.</p>
            <p>Tech used: vanilla JavaScript, Ruby on Rails, HTML5, CSS3</p>
            <div className="fontsize20">
                <a href="https://github.com/ScottMS724/game_profiles_frontend-" target="_blank" rel="noopener noreferrer">GitHub</a><span> &nbsp; </span>
                <a href="https://game-profiles-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">Live App</a>
            </div>
            <br></br>
            <div>
                <img src={GameProfiles} className="imgresize" alt=""/>
            </div>
            <br></br>
            <br></br>

            <u><h3>Steam Game Reviews</h3></u>
            <p className="fontsize20">A Ruby CLI gem to easily view the top 25 most recent video games under the "popular new releases" 
            section of Steam's website. The gem can also provide the date any specific video game was released and the review information 
            for each video game, upon user request. Steam is a video game distribution software.</p>
            <p>Tech used: Nokogiri, Ruby</p>
            <p className="fontsize20"><a href="https://github.com/ScottMS724/steam_games" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            <div>
                <img src={SteamGames} className="imgresize" alt=""/>
            </div>
        </div>
    );
};

export default Projects; 