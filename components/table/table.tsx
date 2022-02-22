import * as React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import internal from 'stream';

import ResponsiveContainer from '../ResponsiveContainer';

interface Column {
  id: 'name' | 'department' | 'role' | 'unity' | 'status';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Nome completo', minWidth: 170 },
  { id: 'department', label: 'Departamento', minWidth: 100 },
  { id: 'role', label: 'Cargo', minWidth: 100 },
  { id: 'unity', label: 'Unidade', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 50 },
  
];

interface Data {
  id: number;
  name: string;
  department: string;
  role: string;
  unity: string;
  status: string;
}

function createData(
  id: number,
  name: string,
  department: string,
  role: string,
  unity: string,
  status: string,
 
): Data {
  
  return { id, name, department, role, unity, status };
}

const rows = [
  createData( 1, 'Pikachu Soares do Santos Dias', 'Administrativo', 'Diretor', 'Quartel General', 'Ativo' ),
  createData( 2, 'Godzilla da Silva', 'Administrativo', 'Gerente', 'Quartel General', 'Ativo' ),
  createData( 3, 'Gandalf Andrade', 'Administrativo', 'Diretor', 'Quartel General', 'Inativo' ),
  createData( 4, 'Rey Lima e Silva', 'Administrativo', 'Diretor', 'Quartel General', 'Ativo' ),
  createData( 5, 'Carol Danvers', 'Comercial', 'Analista', 'Quartel General', 'Ativo' ),
];

export default function StickyHeadTable() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (


    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 240 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[1, 2, 5]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>


  );
}
