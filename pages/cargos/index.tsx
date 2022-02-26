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

type contentType = {
  role: string,
  departament: string,
  agents_quantity: number,
}

type Props = {
    roles: contentType[],
  };

const Home: NextPage = () => {

const [roles, setRoles] = useState([]);

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


  return (
    <Layout title="Organização">
      <>
        <Tabs active="Cargos" />
  
        <SearchBar label="Pesquisar por" placeholder="Pesquise por cargos" />
                
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
            <RolesTable content={ roles }/>
          </ResponsiveContainer>

          <ResponsiveContainer device="mobile">
            <RolesMobileTable content={ roles }/>
          </ResponsiveContainer>
          </>
          )

          }

        
      </>
  
    </Layout>
  )
}

export default Home
