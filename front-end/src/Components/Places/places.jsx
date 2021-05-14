import React, { useState, useEffect } from 'react';
// import Drawer from '@material-ui/core/Drawer';
import Card from '@material-ui/core/Card'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Cancel from "@material-ui/icons/Cancel";

import {
  cardStyle, textBoxStyle
} from './style.css';
import getPlaces from '../../Service/places';

export default function Places() {
  const [searchValue, setSearchValue] = useState('');

  useEffect(async () => {
      console.log(searchValue);
    const response = await getPlaces(searchValue);
    console.log(response.body);
      // call google
  }, [searchValue]);

  const keyDown = (event) => {
    if (event.keyCode === 13) console.log('key down')
  }
  
  const handleSearchValue = (e =  {}) => {
    if (!e || !e.target || e.target.value === searchValue) return;

    setSearchValue(e.target.value);
  }

  const handleCancel = () => {
    setSearchValue('');
  }

  return (
      <div>
        <Card style={cardStyle()}>
          <TextField
            value={searchValue}
            onChange={handleSearchValue}
            onKeyDown={(e) => keyDown(e)}
            InputProps={{endAdornment: <Cancel onClick={handleCancel} />}}
            style={textBoxStyle()}
            id='outline-basic' label='Find location' variant='outlined' />
        </Card>
      </div>
  );
}