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
    label: string;
};



 

const SearchBar = ( { label, placeholder }:Props ) => {

    return(
        <>
        
            <TextField
                fullWidth
                id="outlined-size-small"
                size="small"
                label={ label }
                type="search"
                color="info"
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