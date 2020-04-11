import React from 'react';
// import News from "../News/News"
import './Home.css';

export default function Home() {
	return (
		<div className="home-container">
			<div className="slideshow">
				<div className="images" />
				<img src="https://smash-app.s3-us-west-1.amazonaws.com/panoramic.png" alt=""/>
			</div>
			<div className="nav-section">
				<img className="logo" src="https://smash-app.s3-us-west-1.amazonaws.com/Smash+Bros+Logo.png" alt="" />
        <div className="nav">
          <button className="nav-button">
            Fighters
          </button>
          <button className="nav-button">
            Tournaments
          </button>
        </div>
			</div>
      {/* <News /> */}
		</div>
	);
}
