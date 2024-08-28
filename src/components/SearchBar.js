import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function SearchBar({ onSearchChange }) {
  const handleChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <Box sx={{ marginBottom: 2 }}>
      <TextField
        fullWidth
        id="search-bar"
        label="Search..."
        variant="outlined"
        onChange={handleChange}
      />
    </Box>
  );
}

export default SearchBar;
