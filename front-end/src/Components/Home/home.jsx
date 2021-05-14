import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Appbar from '@material-ui/core/AppBar';
import Places from '../Places/places';

import {
    center,
    backgroundStyle,
    headerStyle,
    flexStartStyle,
    smallHeader,
    appBarStyle,
} from './style.css';

export default function Home() {
  useEffect(() => {
    window.addEventListener('deviceorientation', ({ absolute, gamma, beta, alpha }) => console.log({ absolute, gamma, beta, alpha }));
    window.addEventListener('devicemotion', ({ x, y, z}) => console.log({x, y, z}));
  
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation, true);
      window.addEventListener('devicemotion', ({ x, y, z}) => console.log({x, y, z}));
    }
 }, []);

    return (
      <React.Fragment>
        <Appbar style={appBarStyle()}>
          <Container style={center()}>
            <div>
              <h1 style={smallHeader()}>Welcome to</h1>
              <h1 style={headerStyle()}>AccessNow</h1>
            </div>
          </Container>
      </Appbar>
         {Places()}
      </React.Fragment>

    );
}