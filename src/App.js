import React from 'react';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import routes from './routes';
import { withRouter } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className="app">
			<Home />
			{routes}
			<Profile />
		</div>
	);
}

export default withRouter(App);
