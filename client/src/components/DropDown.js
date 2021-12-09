
import * as React from 'react';
// import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components'


export default function BasicSelect({sitterRates, sortPrice, setSortPrice}) {


  const handleSortChange = (e) => {
    setSortPrice(e.target.value);
  };

  // const lowToHigh = sitterRates.sort()
  // console.log(lowToHigh)

  return (
    <Box className="dropdown" sx={{ minWidth: 40 }} >
     <Label>
      <strong>Sort By:</strong>
        <FormControl fullWidth style={{background: '#EFD9CE'}}>
          <InputLabel id="demo-simple-select-label">Price</InputLabel>
          <Select
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            value='High'
            label="price"
            onChange={handleSortChange}
          >
            <MenuItem value="Low">$ Low to High</MenuItem>
            {/* <MenuItem value="High">$ High to Low</MenuItem> */}
          </Select>
        </FormControl>
      </Label>
    </Box>
  );
}

const Label = styled.label`
  font-family: 'Fuzzy Bubbles', cursive;
  font-size: 18px;
  margin-bottom: 20px;
  display: flex;
  margin-bottom: 10px;
`

