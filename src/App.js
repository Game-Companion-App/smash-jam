import React from 'react';
import Profile from './components/Profile/Profile'
<<<<<<< HEAD
import News from './components/News/News'
=======
import routes from './routes'
import {withRouter} from 'react-router-dom'

>>>>>>> master
import './App.css';

function App() {
  return (
    <div className="app">
<<<<<<< HEAD
      App
      <News />
=======
      {routes}
>>>>>>> master
      <Profile />
    </div>
  );
}

export default withRouter(App);
