import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function SitterRating() {
  const [value, setValue] = React.useState(0);
  console.log(value)
  const getRating = () => {
    
  }

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Leave a rating!</Typography>
      <Rating
        name="simple-controlled"
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}