import * as React from 'react';
import Router from 'next/router'

import { styled, alpha } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';

import MenuItem from '@mui/material/MenuItem';
import {HiPencilAlt as EditIcon} from 'react-icons/hi';
import DuplicateIcon from '@mui/icons-material/LayersOutlined';
import EyeIcon from '@mui/icons-material/VisibilityOutlined';
import TrashIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RoundedIcon from '@mui/icons-material/SyncRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NoteIcon from '@mui/icons-material/NoteAddOutlined';

import Divider from '@mui/material/Divider';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  color: 'rgba(52, 66, 61, 1)',
  padding: '14px 24px',
  border: '2px solid',
  borderRadius: '8px',
  lineHeight: 1.5,
  fontWeight: '600',
  backgroundColor: '#fff',
  borderColor: 'rgba(181, 241, 221, 1)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: 'rgba(181, 241, 221, .1)',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'rgba(181, 241, 221, .9)',
    borderColor: '#fff',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});




const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 200,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 20,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

type Props = {
  id: number,
  path: string,
};

export default function CustomizedMenus( { id, path }:Props ) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const routeChange = ( ) =>{ 
    
    const {pathname} = Router
    Router.push(`${path}/${id}`)
   
  }

 

  return (
    <div>
      <BootstrapButton
        id="demo-customized-button"
        fullWidth
        size="large"
        variant="contained" color="success"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={handleClick}
        startIcon={<NoteIcon sx={{ color: 'rgba(29, 209, 149, 1)' }}/>}
      >
        Ações
      </BootstrapButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {
          path == "/colaborador" ? (
            <>
              <MenuItem onClick={routeChange} disableRipple>
                <EyeIcon />
                  Ver colaborador
              </MenuItem>
              
              <MenuItem onClick={handleClose} disabled disableRipple>
              <TrashIcon />
                  Excluir
              </MenuItem>
            </>   
          ) : (
            <>
              <MenuItem onClick={routeChange} disableRipple>
                <EyeIcon />
                  Ver cargo
              </MenuItem>
              <MenuItem onClick={handleClose} disabled disableRipple>
                <EditIcon size="21"/> &nbsp; 
                  Editar
              </MenuItem>
              <MenuItem onClick={handleClose} disabled disableRipple>
                <DuplicateIcon />
                  Duplicar
              </MenuItem>
              <MenuItem onClick={handleClose} disabled disableRipple>
              <RoundedIcon />
                  Excluir
              </MenuItem>
            </>
          )
        }
        
       
      </StyledMenu>
    </div>
  );
}
