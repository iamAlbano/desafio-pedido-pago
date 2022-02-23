import * as React from 'react';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { PinDropSharp } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';




import styled from '@emotion/styled'

type Props = {
    placeholder: string,
};



 

const SearchBar = ( { placeholder }:Props ) => {

    return(
        <>
        
            <TextField
                fullWidth
                id="outlined-size-small"
                size="small"
                label="Pesquisar por"
                type="search"
                color="primary"
                placeholder={ placeholder }
                InputLabelProps={{
                    shrink: true,
                }}

                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                    ),
                }}
                />        
            </>
    )
}

export default SearchBar;