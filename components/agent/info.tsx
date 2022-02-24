import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Doc from '@mui/icons-material/ArticleTwoTone';
import Phone from '@mui/icons-material/PhoneInTalkTwoTone';
import Calendar from '@mui/icons-material/CalendarTodayTwoTone';

import ResponsiveContainer from '../ResponsiveContainer'

type Props = {
    cpf: string,
    phone: string,
    date: string,
  };

const InfoContainer= styled.div(
    `
    margin: 2% 1.2% 2% 0%;
         
          
    `
    )

export default function Info( { cpf, phone, date}:Props ){

return (
    <InfoContainer>
        <ResponsiveContainer device="desktop">

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>

                    <Grid item xs={4}>
                        <FormControl fullWidth sx={{ m: 1 }}>      
                            <InputLabel htmlFor="outlined-adornment">CPF</InputLabel>
                                <OutlinedInput
                                        readOnly
                                        id="outlined-adornment"
                                        value={ cpf }              
                                        startAdornment={
                                        <InputAdornment position="start">
                                            <Doc />
                                        </InputAdornment>}
                                        label="CPF"
                                    />
                        </FormControl>
                    </Grid>

                    <Grid item xs={4}>
                        <FormControl fullWidth sx={{ m: 1 }}>      
                                <InputLabel htmlFor="outlined-adornment">Telefone</InputLabel>
                                    <OutlinedInput
                                        readOnly
                                        id="outlined-adornment"
                                        value={ phone }              
                                        startAdornment={
                                        <InputAdornment position="start">
                                            <Phone />
                                        </InputAdornment>}
                                        label="Telefone"
                                    />
                        </FormControl>
                    </Grid>

                    <Grid item xs={4}>
                        <FormControl fullWidth sx={{ m: 1 }}>      
                            <InputLabel htmlFor="outlined-adornment">Nascimento</InputLabel>
                                    <OutlinedInput
                                        readOnly
                                        id="outlined-adornment"
                                        value={ date }              
                                        startAdornment={
                                        <InputAdornment position="start">
                                            <Calendar />
                                        </InputAdornment>}
                                        label="Nascimento"
                                    />
                        </FormControl>
                    </Grid>


                </Grid>
            </Box>
        </ResponsiveContainer>

        <ResponsiveContainer device="mobile">

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <FormControl fullWidth sx={{ m: 1 }}>      
                            <InputLabel htmlFor="outlined-adornment">CPF</InputLabel>
                                <OutlinedInput
                                        readOnly
                                        id="outlined-adornment"
                                        value={ cpf }              
                                        startAdornment={
                                        <InputAdornment position="start">
                                            <Doc />
                                        </InputAdornment>}
                                        label="CPF"
                                    />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth sx={{ m: 1 }}>      
                                <InputLabel htmlFor="outlined-adornment">Telefone</InputLabel>
                                    <OutlinedInput
                                        readOnly
                                        id="outlined-adornment"
                                        value={ phone }              
                                        startAdornment={
                                        <InputAdornment position="start">
                                            <Phone />
                                        </InputAdornment>}
                                        label="Telefone"
                                    />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth sx={{ m: 1 }}>      
                            <InputLabel htmlFor="outlined-adornment">Nascimento</InputLabel>
                                    <OutlinedInput
                                        readOnly
                                        id="outlined-adornment"
                                        value={ date }              
                                        startAdornment={
                                        <InputAdornment position="start">
                                            <Calendar />
                                        </InputAdornment>}
                                        label="Nascimento"
                                    />
                        </FormControl>
                    </Grid>


                </Grid>
            </Box>
        </ResponsiveContainer>
    </InfoContainer>
    
)
}