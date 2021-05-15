import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Appbar from '@material-ui/core/AppBar';
import { v4 as uuidv4 } from 'uuid';

import Places from '../Places/places';
import { handleOrientation, handleAccelerometer } from '../../Helpers/sensors';
import { handleSessionEnd } from '../../Helpers/session';

import {
    center,
    headerStyle,
    smallHeader,
    appBarStyle,
} from './style.css';

export default function Home() {
  window.addEventListener("onbeforeunload", handleSessionEnd());

  useEffect(() => {
    localStorage.setItem('user_session_id', uuidv4());

    const createTimeStampSeconds = Math.floor((new Date()).getTime() / 1000);

    localStorage.setItem('start_time', createTimeStampSeconds);

    window.addEventListener('deviceorientation', ({ absolute, gamma, beta, alpha }) => handleOrientation({ absolute, gamma, beta, alpha }));
    window.addEventListener('devicemotion', ({ x, y, z}) => handleAccelerometer({x, y, z}));
  
    return () => {
      window.removeEventListener('deviceorientation', ({ absolute, gamma, beta, alpha }) => handleOrientation({ absolute, gamma, beta, alpha }));
      window.removeEventListener('devicemotion', ({ x, y, z}) => handleAccelerometer({x, y, z}));
      window.removeEventListener("beforeunload", handleSessionEnd());
    }
 }, []);

    return (
      <React.Fragment>
        <Appbar style={appBarStyle()}>
          <Container style={center()}>
            <div>
              <h1 style={smallHeader()}>Technical assignment</h1>
              <h1 style={headerStyle()}>AccessNow</h1>
            </div>
          </Container>
      </Appbar>
         {Places()}
      </React.Fragment>

    );
}