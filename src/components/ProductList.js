import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

function ProductList({ products }) {
  const [page, setPage] = useState(0); // Page actuelle
  const [rowsPerPage, setRowsPerPage] = useState(10); // Nombre de lignes par page

  // Gérer le changement de page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Gérer le changement du nombre de lignes par page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Calculer les produits à afficher sur la page actuelle
  const paginatedProducts = products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold', textAlign: 'left' , verticalAlign: 'top', width: 'auto' }}>Title</TableCell>
            <TableCell style={{ fontWeight: 'bold', textAlign: 'left' , verticalAlign: 'top'}}>Mark</TableCell>
            <TableCell style={{ fontWeight: 'bold', textAlign: 'left' , verticalAlign: 'top', whiteSpace: 'nowrap', width: 'auto' }}>Price (€)</TableCell>
            <TableCell style={{ fontWeight: 'bold', textAlign: 'left' , verticalAlign: 'top'}}>Seller</TableCell>
            <TableCell style={{ fontWeight: 'bold', textAlign: 'left' , verticalAlign: 'top'}}>Source</TableCell>
            <TableCell style={{ fontWeight: 'bold', textAlign: 'left' , verticalAlign: 'top'}}>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedProducts.map((product) => (
            <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" align="left">
              <a href={product.url}>{product.title}</a>
              </TableCell>
              <TableCell><span align="left">{product.mark}</span></TableCell>
              <TableCell align="left">{product.price}</TableCell>
              <TableCell align="left">{product.seller}</TableCell>
              <TableCell align="left">{product.source}</TableCell>
              <TableCell align="left">{product.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default ProductList;
