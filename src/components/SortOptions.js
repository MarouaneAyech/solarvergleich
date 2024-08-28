import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function SortOptions({ onSortChange }) {
  const handleChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <Box sx={{ marginBottom: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="sort-label">Sort by</InputLabel>
        <Select
          labelId="sort-label"
          id="sort-select"
          onChange={handleChange}
          label="Trier par"
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="priceAsc">Price (ascending)</MenuItem>
          <MenuItem value="priceDesc">Price (descending)</MenuItem>
          <MenuItem value="brandAsc">Mark (A-Z)</MenuItem>
          <MenuItem value="brandDesc">Mark (Z-A)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SortOptions;
