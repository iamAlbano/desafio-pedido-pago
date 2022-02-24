
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import React, { useState } from "react";

import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

interface OptionsType {
    label: string;
    value: string;
  }
  

type Props = {
    label: string,
    options: string[],
    defaultValue: string;
};


  export default function SelectTextFields( { label, defaultValue, options }:Props ) {
    
  

    let selectOptions:OptionsType[] = [ ];
  
    
    options.map((option) => {
        selectOptions.push({value: option, label: option})
    })
    
    const [current, setCurrent] = useState(defaultValue);

   

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrent(event.target.value);
      };

    return(
       
            <TextField
            fullWidth
            id="outlined-select-currency"
            select
            label={ label }
            value={current}
            onChange={handleChange}
            
            >
            {selectOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
    
    )
}