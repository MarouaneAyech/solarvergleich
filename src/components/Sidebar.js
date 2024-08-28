import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';

function Sidebar({ products, onMarkFilterChange, onPriceFilterChange }) {
  const [selectedMarks, setSelectedMarks] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000); // Maximum price for the slider range

  const marks = [...new Set(products.map((product) => product.mark))];

  const handleMarkChange = (event) => {
    const { value, checked } = event.target;
    const newSelectedMarks = checked
      ? [...selectedMarks, value]
      : selectedMarks.filter((mark) => mark !== value);
    setSelectedMarks(newSelectedMarks);
    onMarkFilterChange(newSelectedMarks);
  };

  const handlePriceChange = (event, newValue) => {
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
    onPriceFilterChange(newValue[0], newValue[1]);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6"><strong>Filter by mark</strong></Typography>
      {marks.map((mark) => (
        <FormControlLabel
          key={mark}
          control={
            <Checkbox
              value={mark}
              checked={selectedMarks.includes(mark)}
              onChange={handleMarkChange}
            />
          }
          label={mark}
        />
      ))}
      <Typography variant="h6" sx={{ marginTop: 2 }}><strong>Filter by price</strong></Typography>
      <Slider
        value={[minPrice, maxPrice]}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={1000} // Set the maximum range as per your needs
      />
      <Typography variant="body1">Price: {minPrice}€ - {maxPrice}€</Typography>
    </Box>
  );
}

export default Sidebar;
