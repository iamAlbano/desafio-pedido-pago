import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/header'
import SearchBar from '../../components/container/search'
import Tabs from '../../components/container/tabs'


import api from "../api/agents";
import React, { useEffect, useState } from "react";

import ResponsiveContainer from '../../components/ResponsiveContainer'
import Title from '../../components/container/title'
import RolesTable from '../../components/table/roles/rolesTable'
import RolesMobileTable from '../../components/table/roles/rolesMobileTable'

import Layout from '../../components/layout'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

type contentType = {
  role: string,
  departament: string,
  agents_quantity: number,
}

type Props = {
    search: string,
    roles: contentType[],
  };

const Home: NextPage = () => {

const [roles, setRoles] = useState([]);
const [ search, setSearch] = useState("")

useEffect(() => {
  api
    .get("/roles")
    .then((response) => {
      setRoles(response.data.roles)    
    }
    )
    .catch((err) => {
      console.error("erro: " + err);
    });
}, []);

function handleChangeSearch( search:string ){
  setSearch(search)
}


  return (
    <Layout title="Organização">
      <>
        <Tabs active="Cargos" />
  
        {/* <SearchBar label="Pesquisar por" placeholder="Pesquise por cargos" /> */}

        <TextField
                fullWidth
                id="outlined-size-small"
                size="small"
                label="Pesquisar por"
                type="search"
                color="info"
                onChange={e => handleChangeSearch(e.target.value)}
                placeholder="Pesquisar por cargos"
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
                
        <Title text="Listagem de cargos" type="h2"/>

        { roles.length == 0 ? (

          <Box sx={{ 
                display: 'flex',
                justifyContent: 'center',
                }}>
            <CircularProgress />
          </Box>     

          ) : (
          <>
          <ResponsiveContainer device="desktop">
            <RolesTable content={ roles } search={ search } />
          </ResponsiveContainer>

          <ResponsiveContainer device="mobile">
            <RolesMobileTable content={ roles } search={ search }/>
          </ResponsiveContainer>
          </>
          )

          }

        
      </>
  
    </Layout>
  )
}

export default Home
