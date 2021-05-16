import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import Cancel from '@material-ui/icons/Cancel';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {
  cardStyle, textBoxStyle, buttonStyle, gridStyleCenter,
} from './style.css';
import getPlaces from '../../Helpers/places';

/* Render location search results in list format.
   Render select button beside each list item. */
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
  const [searchValue, setSearchValue] = useState('123 Sample Road'); /* Users input */
  const [places, setPlaces] = useState([]); /* Google filled places suggestion */
  const [selectedPlace, setSelectedPlace] = useState(''); /* Users selected place */

  /* Reset all user suggestions + places */
  const reset = () => {
    setPlaces([]);
    setSelectedPlace('');
  };

  useEffect(() => {
    if (!searchValue) return reset();

    async function returnPlaces() {
      const response = await getPlaces(searchValue);

      if (response && response.body) setPlaces(response.body);
    }

    returnPlaces();

    return null;
  }, [searchValue]);

  const handleSearchValue = (e = {}) => {
    if (!e || !e.target || e.target.value === searchValue) return;

    setSearchValue(e.target.value);
  };

  const handleCancel = () => {
    setSearchValue('');
  };

  const renderPlacesList = () => places.map((place) => {
    if (!place) return null;

    return renderListItems(place, () => setSelectedPlace(place));
  });

  /* If user selects a place, this function will return card with selected location */
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
    <>
      <Grid container spacing={1} style={gridStyleCenter()}>
        <Grid item xs={6}>
          <Card style={cardStyle()}>
            <TextField
              value={searchValue}
              onChange={handleSearchValue}
              InputProps={{ endAdornment: <Cancel onClick={handleCancel} /> }}
              style={textBoxStyle()}
              id="outline-basic"
              label="Find location"
              variant="outlined"
            />
          </Card>
        </Grid>
        <Grid item xs={6}>
          {renderSelectedPlace()}
        </Grid>
      </Grid>
      {renderPlacesList()}
    </>
  );
}
