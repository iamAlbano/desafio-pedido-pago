import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import ResponsiveContainer from '../ResponsiveContainer'

type Props = {
    name: string,
    department: string,
  };


const InfoContainer= styled.div(
    `
    margin: 2% 2% 2% 0%;
   
    `
  )




export default function Info( { name, department }:Props ){

    return(
        <>
        {/* Modelo para desktops */}
      <InfoContainer>
      <ResponsiveContainer device="desktop">
        <Box sx={{ flexGrow: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                  <FormControl fullWidth sx={{ m: 1 }}>      
                      <InputLabel htmlFor="outlined-adornment">Departamento</InputLabel>
                          <OutlinedInput
                              readOnly
                              id="outlined-adornment"
                              value={ department }              
                              label="Departamento"
                              startAdornment={
                                <InputAdornment position="start">
                                    
                                </InputAdornment>}
                          />
                  </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth sx={{ m: 1 }}>      
                        <InputLabel htmlFor="outlined-adornment">Cargo</InputLabel>
                            <OutlinedInput
                                readOnly
                                id="outlined-adornment"
                                value={ name }              
                                label="Cargo"
                                startAdornment={
                                    <InputAdornment position="start">
                                        
                                    </InputAdornment>}
                            />
                    </FormControl> 
              </Grid>   

            </Grid>
        </Box>
      </ResponsiveContainer>

      
      {/* Modelo para mobile */}
      <ResponsiveContainer device="mobile">
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <FormControl fullWidth sx={{ m: 1 }}>      
                      <InputLabel htmlFor="outlined-adornment">Departamento</InputLabel>
                          <OutlinedInput
                              readOnly
                              id="outlined-adornment"
                              value={ department }              
                              label="Departamento"
                              startAdornment={
                                <InputAdornment position="start">
                                    
                                </InputAdornment>}
                          />
                  </FormControl>
              </Grid>
              <Grid item xs={12}>
              <FormControl fullWidth sx={{ m: 1 }}>      
                        <InputLabel htmlFor="outlined-adornment">Cargo</InputLabel>
                            <OutlinedInput
                                readOnly
                                id="outlined-adornment"
                                value={ name }              
                                label="Cargo"
                                startAdornment={
                                    <InputAdornment position="start">
                                        
                                    </InputAdornment>}
                            />
                    </FormControl> 
              </Grid>   
            </Grid>
        </Box>
      </ResponsiveContainer>
      </InfoContainer>
      </>
    )

}