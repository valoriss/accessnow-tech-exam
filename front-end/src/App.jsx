import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Home from './Components/Home/home';
import { handleOrientation, handleAccelerometer } from './Helpers/sensors';
import handleSessionEnd from './Helpers/session';

export default function App() {
  /* If user refreshes page or leaves/closes site, log session end */
  window.addEventListener('onbeforeunload', handleSessionEnd());

  useEffect(() => {
    /* Generate UUID for user on site visit */
    localStorage.setItem('user_session_id', uuidv4());

    const createTimeStampSeconds = new Date();

    /* Log start_time to users session */
    localStorage.setItem('start_time', createTimeStampSeconds);

    /* Get sensor information for device orientation */
    window.addEventListener('deviceorientation', ({
      absolute, gamma, beta, alpha,
    }) => handleOrientation({
      absolute, gamma, beta, alpha,
    }));

    /* Get sensor information for device acceleration
    Logs will be created when changes in motion of device are detected */
    window.addEventListener('devicemotion', ({ x = 0, y = 0, z = 0 }) => handleAccelerometer({ x, y, z }));

    /* On unmount, remove event listeners */
    return () => {
      window.removeEventListener('deviceorientation', ({
        absolute, gamma, beta, alpha,
      }) => handleOrientation({
        absolute, gamma, beta, alpha,
      }));
      window.removeEventListener('devicemotion', ({ x, y, z }) => handleAccelerometer({ x, y, z }));
      window.removeEventListener('beforeunload', handleSessionEnd());
    };
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
