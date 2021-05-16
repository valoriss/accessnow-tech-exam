import React from 'react';
import Container from '@material-ui/core/Container';
import Appbar from '@material-ui/core/AppBar';

import Places from '../Places/places';

import {
  centerStyle,
  headerStyle,
  smallHeaderStyle,
  appBarStyle,
} from './style.css';

export default function Home() {
  return (
    <>
      <Appbar style={appBarStyle()}>
        <Container style={centerStyle()}>
          <div>
            <h1 style={smallHeaderStyle()}>Technical assignment</h1>
            <h1 style={headerStyle()}>AccessNow</h1>
          </div>
        </Container>
      </Appbar>
      {Places()}
    </>
  );
}
