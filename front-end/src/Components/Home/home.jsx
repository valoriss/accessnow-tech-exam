import React from 'react';
import Container from '@material-ui/core/Container';
import Appbar from '@material-ui/core/AppBar';

import Places from '../Places/places';

import {
    center,
    headerStyle,
    smallHeader,
    appBarStyle,
} from './style.css';

export default function Home() {
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