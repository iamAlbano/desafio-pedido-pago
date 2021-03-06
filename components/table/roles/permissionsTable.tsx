import * as React from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';

import Checkbox from '@mui/material/Checkbox';



const Root = styled('div')`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  thead {
    color: #587169;
    border: 2px solid #CAD6D1;
  }

  td,
  th {
    color: #587169;
    font-weight: 400;
    text-align: left;
    padding: 12px;
    border-bottom: 1px solid #EAEFED;
  }

`;

const CustomTablePagination = styled(TablePaginationUnstyled)`
  
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }

  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }

  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }
  & .MuiTablePaginationUnstyled-select {
    padding: 2px;
    border: 1px solid #587169;
    border-radius: 8px;
    background-color: transparent;
    &:hover {
      background-color: #fff;
    }
    &:focus {
      outline: 1px solid #587169;
    }
  }

  & .MuiTablePaginationUnstyled-actions {
    display: flex;
    gap: 0.25rem;
  }

  & .MuiTablePaginationUnstyled-actions > button {
    margin: 0 8px;
    border: 1px solid #587169;
    border-radius: 2px;
    background-color: transparent;
    &:hover {
      background-color: #EAEFED;
    }
    &:focus {
      outline: 1px solid #EAEFED;
    }
  }
`;

type contentType = {
    role:string,
    permissions: string[],
}

type Props = {
  content: contentType[] | undefined,
}


export default function UnstyledTable( { content }:Props ) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  function createData(name: string, read: boolean,  edit:boolean, del: boolean) {
    
    return { name, read, edit, del };
    
  }

  type permissions = {
    name: string;
    read: boolean;
    edit: boolean;
    del: boolean;
  }
  
  let rows:permissions[] = [];

    content?.map((row) => {
       
        rows.push(
            createData(row?.role,
                row?.permissions.includes('read'), 
                row?.permissions.includes('write'),
                row?.permissions.includes('delete'),  ),
        )
     })


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  let key = 1;

  return (
    <Root sx={{ maxWidth: '100%'}}>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Cargo</th>
            <th>Ler</th>
            <th>Editar</th>   
            <th>Excluir</th>     
          </tr>
        </thead>
        <tbody>

          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <tr key={key++}>
              
              <td style={{ width: 200 }} align="right">
                    {row.name} 
                  </td>
              
                    <td style={{ width: 130 }} align="justify">
                        {row.read == true ? (
                            <Checkbox
                            color="success"
                            defaultChecked
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                          />
                        ) : (
                            <Checkbox
                            color="success"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                          />
                        )}
                    </td>
                    <td style={{ width: 130 }} align="justify">
                        {row.edit == true ? (
                            <Checkbox
                            color="success"
                            defaultChecked
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                          />
                        ) : (
                            <Checkbox
                            color="success"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                          />
                        )}
                    </td>
                    
                    <td style={{ width: 40 }} align="justify">
                        {row.del == true ? (
                            <Checkbox
                            color="success"
                            defaultChecked
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                          />
                        ) : (
                            <Checkbox
                            color="success"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                          />
                        )}
                    </td>
            </tr>
          ))}
          {emptyRows > 0 && (
            <tr style={{ height: 41 * emptyRows }}>
              <td colSpan={3} />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'Todos', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              componentsProps={{
                select: {
                  'aria-label': 'rows per page',
                },
                
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tr>
        </tfoot>
      </table>
    </Root>
  );
}
