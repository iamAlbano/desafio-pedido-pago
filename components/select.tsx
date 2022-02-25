import * as React from 'react';
import { css, jsx } from '@emotion/react'

import { alpha, styled } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';


const Info= styled(TextField)`

background-color: rgba(245, 250, 248, 1);
border-radius: 8px !important;


`


type Props = {
    label: string,
    options: string[],
    defaultValue: string;
};


  export default function SelectTextFields( { label, defaultValue, options }:Props ) {
    
  
    
    return (
      <Info
        label={label}
        fullWidth
       
        defaultValue={defaultValue}
        
      />
    )
    
    
}