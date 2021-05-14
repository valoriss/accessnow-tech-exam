import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './Components/Home/home';

function App() {
  // if (window.DeviceMotionEvent) console.log('device motion started');
  // window.addEventListener('devicemotion', function(event) {
  //   console.log(event);
  //   console.log(event.acceleration.x + ' m/s2');
  // });
  
  // window.addEventListener('deviceorientation', (event) => { console.log(event)});

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
