// import React, { useState } from 'react'
// import { Dropdown } from 'semantic-ui-react'

// const options = [
//   { key: 'price', text: 'Price', value: 'price' },
//   { key: 'location', text: 'Location', value: 'location' }
// ]


// const DropDown = () => {
//     const [value, setValue] = useState("")



//     return (
//         <Dropdown
//         placeholder='Filter' 
//         fluid multiple 
//         selection 
//         options={options}
//         value={value} 
//         onChange={(e) => setValue(e.target.value)}
//         />
//     );
// }

// export default DropDown

import * as React from 'react';
// import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function BasicSelect({sitterRates, sortPrice, setSortPrice}) {


  const handleSortChange = (e) => {
    setSortPrice(e.target.value);
  };

  // const lowToHigh = sitterRates.sort()
  // console.log(lowToHigh)

  return (
    <Box className="dropdown" sx={{ minWidth: 50 }}>
     <label>
      <strong>Sort By:</strong>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Price</InputLabel>
          <Select
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            value="high"
            label="price"
            onChange={handleSortChange}
          >
            <MenuItem value="Low">$ Low to High</MenuItem>
            <MenuItem value="High">$ High to Low</MenuItem>
          </Select>
        </FormControl>
      </label>
    </Box>
  );
}


