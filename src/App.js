import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import SortOptions from './components/SortOptions';
import SearchBar from './components/SearchBar'; // Import du composant SearchBar
import Header from './components/Header'; // Import du Header
import Footer from './components/Footer'; // Import du Footer
import { products as initialProducts } from './products';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [products] = useState(initialProducts);
  const [selectedMarks, setSelectedMarks] = useState([]);
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [sortOption, setSortOption] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // Nouvel état pour la recherche

  const handleMarkFilterChange = (marks) => {
    setSelectedMarks(marks);
  };

  const handlePriceFilterChange = (minPrice, maxPrice) => {
    setPriceRange([minPrice, maxPrice]);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesMark = selectedMarks.length === 0 || selectedMarks.includes(product.mark);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.mark.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesMark && matchesPrice && matchesSearch;
    });

    if (sortOption === 'priceAsc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceDesc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'markAsc') {
      filtered.sort((a, b) => a.mark.localeCompare(b.mark));
    } else if (sortOption === 'markDesc') {
      filtered.sort((a, b) => b.mark.localeCompare(a.mark));
    }

    return filtered;
  }, [products, selectedMarks, priceRange, sortOption, searchQuery]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header /> {/* Ajout du Header avec les logos */}
      <Box sx={{ display: 'flex' }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Sidebar
              products={products}
              onMarkFilterChange={handleMarkFilterChange}
              onPriceFilterChange={handlePriceFilterChange}
            />
          </Grid>
          <Grid item xs={9}>
            {/* <h1>Comparateur de prix des panneaux solaires</h1> */}
            {/* <Box sx={{ padding: 2, textAlign: 'center' }}>
              <h1 style={{ 
                fontStyle: 'italic', 
                fontSize: '2rem', 
                color: theme.palette.primary.main, 
                borderLeft: '4px solid #1976d2', 
                paddingLeft: '1rem', 
                marginBottom: '1rem'
              }}>
                “Compare and Choose the Best Solar Panels for Your Needs”
              </h1>
            </Box> */}
            <SearchBar onSearchChange={handleSearchChange} /> {/* Ajout de la barre de recherche */}
            <SortOptions onSortChange={handleSortChange} />
            <ProductList products={filteredProducts} />
          </Grid>
        </Grid>
      </Box>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
