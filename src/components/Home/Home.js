import React from 'react';
import News from '../News'
import './Home.css';

export default function Home() {
	return (
		<div>
			<div className="slideshow">
				<div className="images" />
				<img src="https://smash-app.s3-us-west-1.amazonaws.com/panoramic.png" />
			</div>
			<div className="nav-section">
				<img className="logo" src="https://smash-app.s3-us-west-1.amazonaws.com/Smash+Bros+Logo.png" />
			</div>
      <News />
		</div>
	);
}
