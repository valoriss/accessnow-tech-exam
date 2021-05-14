import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField';
import Cancel from "@material-ui/icons/Cancel";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {
  cardStyle, textBoxStyle, buttonStyle, gridStyleCenter,
} from './style.css';
import getPlaces from '../../Service/places';
import { Button } from '@material-ui/core';

const renderListItems = (description, onClick) => {
  if (!description || !onClick) return null;

  return (
    <Grid container style={gridStyleCenter()} key={description}>
      <Grid item xs={10}>
        <Card style={cardStyle()}>
          <CardContent>
            <Typography>{description}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Button style={buttonStyle()} onClick={() => onClick()}>
          SELECT
        </Button>
      </Grid>
    </Grid>
  );
};

export default function Places() {
  const [searchValue, setSearchValue] = useState('123 Sample Road');
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState('');

  const reset = () => {
    setPlaces([]);
    setSelectedPlace('');
  };

  useEffect(async () => {
    if (!searchValue) return reset();

    const response = await getPlaces(searchValue);
    
    if (response && response.body) setPlaces(response.body);
  }, [searchValue]);

  const handleSearchValue = (e =  {}) => {
    if (!e || !e.target || e.target.value === searchValue) return;

    setSearchValue(e.target.value);
  }

  const handleCancel = () => {
    setSearchValue('');
  };

  const renderPlacesList = () => {
    return places.map(place => {
      if (!place) return null;

      return renderListItems(place, () => setSelectedPlace(place));
    });
  };

  const renderSelectedPlace = () => {
    if (!selectedPlace) return null;
    
    return (
      <Card style={cardStyle()}>
        <CardContent>
          <Typography>{selectedPlace}</Typography>
        </CardContent>
      </Card>
    );
  };

  return (
      <React.Fragment>
        <Grid container spacing={1} style={gridStyleCenter()}>
          <Grid item xs={6}>
            <Card style={cardStyle()}>
              <TextField
                value={searchValue}
                onChange={handleSearchValue}
                InputProps={{endAdornment: <Cancel onClick={handleCancel} />}}
                style={textBoxStyle()}
                id='outline-basic' label='Find location' variant='outlined' />
            </Card>
          </Grid>
          <Grid item xs={6}>
            {renderSelectedPlace()}
          </Grid>
        </Grid>
        {renderPlacesList()}
      </React.Fragment>
  );
}