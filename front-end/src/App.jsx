import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Home from './Components/Home/home';
import { handleOrientation, handleAccelerometer } from './Helpers/sensors';
import { handleSessionEnd } from './Helpers/session';

function App() {
  window.addEventListener("onbeforeunload", handleSessionEnd());

  useEffect(() => {
    localStorage.setItem('user_session_id', uuidv4());

    const createTimeStampSeconds = new Date();

    localStorage.setItem('start_time', createTimeStampSeconds);

    window.addEventListener('deviceorientation', ({ absolute, gamma, beta, alpha }) => handleOrientation({ absolute, gamma, beta, alpha }));
    window.addEventListener('devicemotion', ({ x = 0, y = 0, z = 0}) => handleAccelerometer({x, y, z}));
  
    return () => {
      window.removeEventListener('deviceorientation', ({ absolute, gamma, beta, alpha }) => handleOrientation({ absolute, gamma, beta, alpha }));
      window.removeEventListener('devicemotion', ({ x, y, z}) => handleAccelerometer({x, y, z}));
      window.removeEventListener("beforeunload", handleSessionEnd());
    }
 }, []);

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
