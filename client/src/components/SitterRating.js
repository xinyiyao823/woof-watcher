import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


export default function SitterRating({value, setValue}) {
  
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
    <Rating
      name="simple-controlled"
      precision={0.5}
      onChange={(event, newValue) => {
      setValue(value => [...value, newValue]);
      }}
    />
    </Box>
  );
}