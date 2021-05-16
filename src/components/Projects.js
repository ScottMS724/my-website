import React from 'react' 

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>

            <h4>Stadium Tracker</h4>
            <p>This app allows for the record keeping of every professional sports stadium a user has visited. Each stadium
            is given a name, location, and picture. In addition, visits can be added to stadiums, with each visit having
            a date and description so you can look back on all the good times. Great for the road trippers that want to attend a 
            game at every stadium.</p>
            <p>Tech used: React, Redux, React Router, HTML5, CSS3, Ruby on Rails</p>
            <p><a href="https://github.com/ScottMS724/stadium-tracker-frontend" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            <p><a href="https://stadium-tracker.netlify.app/" target="_blank" rel="noopener noreferrer">Live App</a></p>

            <h4>Game Profiles</h4>
            <p>With Game Profiles, a user can create their own "game profile." A game profile has a custom picture, title, description, review, 
            and rating. Keep track of all your favorite video games.</p>
            <p>Tech used: vanilla JavaScript, Ruby on Rails, HTML5, CSS3</p>
            <p><a href="https://github.com/ScottMS724/game_profiles_frontend-" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            <p><a href="https://game-profiles-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">Live App</a></p>

            <h4>Steam Game Reviews</h4>
            <p>A Ruby CLI gem to easily view the top 25 most recent video games under the "popular new releases" 
            section of Steam's website. The gem can also provide the date any specific video game was released and the review information 
            for each video game, upon user request. Steam is a video game distribution software.</p>
            <p>Tech used: Nokogiri, Ruby</p>
            <p><a href="https://github.com/ScottMS724/steam_games" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
    );
};

export default Projects; 