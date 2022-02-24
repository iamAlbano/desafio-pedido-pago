import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/header'
import SearchBar from '../../components/container/search'
import Tabs from '../../components/container/tabs'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ResponsiveContainer from '../../components/ResponsiveContainer'

const Home: NextPage = () => {
  return (
    <>
   
      <Tabs active="Cargos" />
        
      
      {/* Modelo para desktops */}
      <ResponsiveContainer device="desktop">
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
              <SearchBar label="Departamento" placeholder="" />
              </Grid>
              <Grid item xs={6}>
              <SearchBar label="Cargo" placeholder="" />
              </Grid>   
            </Grid>
        </Box>
      </ResponsiveContainer>

      
      {/* Modelo para mobile */}
      <ResponsiveContainer device="mobile">
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <SearchBar label="Departamento" placeholder="" />
              </Grid>
              <Grid item xs={12}>
              <SearchBar label="Cargo" placeholder="" />
              </Grid>   
            </Grid>
        </Box>
      </ResponsiveContainer>


  
    </>
  )
}

export default Home
