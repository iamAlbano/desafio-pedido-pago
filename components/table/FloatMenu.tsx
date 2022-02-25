import * as React from 'react';
import Router from 'next/router'

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {HiPencilAlt as EditIcon} from 'react-icons/hi';
import DuplicateIcon from '@mui/icons-material/LayersOutlined';
import EyeIcon from '@mui/icons-material/VisibilityOutlined';
import TrashIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RoundedIcon from '@mui/icons-material/SyncRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NoteIcon from '@mui/icons-material/NoteAddOutlined';

type Props = {
  id: number,
  path: string,
};


const ITEM_HEIGHT = 40;

export default function FloatMenu( { id, path }:Props ) {

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
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {
          path == "/colaborador" ? (
            <>
              <MenuItem onClick={routeChange} disableRipple>
                <EyeIcon sx={{ color: 'rgba(88, 113, 105, 1)' }} />
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
                <EyeIcon sx={{ color: 'rgba(88, 113, 105, 1)' }} /> &nbsp; 
                  Ver cargo
              </MenuItem>
              <MenuItem onClick={handleClose} disabled disableRipple>
                <EditIcon size="23"/> &nbsp; 
                  Editar
              </MenuItem>
              <MenuItem onClick={handleClose} disabled disableRipple>
                <DuplicateIcon /> &nbsp; 
                  Duplicar
              </MenuItem>
              <MenuItem onClick={handleClose} disabled disableRipple>
              <RoundedIcon /> &nbsp; 
                  Excluir
              </MenuItem>
            </>
          )
        }
      </Menu>
    </div>
  );
}
