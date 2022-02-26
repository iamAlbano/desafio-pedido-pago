import * as React from 'react';
import { styled } from '@mui/system';
import styles from '@emotion/styled'
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';

import Status from '../../agent/status' 
import FloatMenu from '../FloatMenu'

import UserImage from '../../agent/userImage'

type objectType = {
  name: string,
  image: string,
  status: string,
  department: string,
  role: string,
  branch: string,
}

type Props = {
    content: objectType[],
  };

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

interface IRowStyled {
  isActive: string;
}

const RowText = styles.span<IRowStyled>`
        color: ${props =>
            props.isActive == 'active' ? 'rgba(88, 113, 105, 1)' : 'rgba(163, 184, 176, 1)'};
        
`



export default function UnstyledTable( { content }:Props ) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  function createData(name: string, department: string, role:string, branch:string, status:string, image:string) {
    
    return { name, department, role, branch, status, image };
    
  }

  
  let rows:objectType[] = [
       
    ];

    content?.map((row) => {
        rows.push(
            createData(row?.name, row?.department, row?.role, row?.branch, row?.status, row?.image),
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

  let key = 1

  return (
    <Root sx={{ maxWidth: '100%'}}>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Nome completo</th>
            <th>Departamento</th>
            <th>Cargo</th>
            <th>Unidade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <tr key={ ++key }>
              <td style={{ width: 200 }} align="right">
                  <UserImage name={row.name} imagePath={row.image} status={row.status} />
                  </td>
              
              <td style={{ width: 160 }} align="right">
                   
                     <RowText isActive={row.status} >
                      {row.department}
                      </RowText>
                                 
              </td>

              <td style={{ width: 130 }} align="right">
                 
                     <RowText isActive={row.status}>
                      {row.role}
                      </RowText>
                    
                
              </td>

              <td style={{ width: 190 }} align="right">
                  
                      <RowText isActive={row.status}>
                        {row.branch}
                        </RowText>
                   
              </td>

              <td style={{ width: 60 }} align="right">
                <Status status={row.status} />
              </td>

              <td style={{ width: 40 }} align="right">
                <FloatMenu id={ key } path="/colaborador" />
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
