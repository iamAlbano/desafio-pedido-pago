import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'

import React, { useEffect, useState } from "react";
import api from "./api/agents";

import Layout from '../components/layout'

import SearchBar from '../components/container/search'
import Tabs from '../components/container/tabs'
import Title from '../components/container/title'
import ResponsiveContainer from '../components/ResponsiveContainer'
import AgentsTable from '../components/table/agents/agentsTable'

import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'
import AgentsMobileTable from '../components/table/agents/agentsMobileTable'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

type objectType = {
  name: string,
  image: string,
  status: string,
  department: string,
  role: string,
  branch: string,
}

type Props = {
    search: string,
    agents: objectType[],
  };

const Home: NextPage = (  ) => {

const [agents, setAgents] = useState([])
const [search, setSearch] = useState("")

useEffect(() => {
  api
    .get("/agents")
    .then((response) => {
      setAgents(response.data.items)
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
  
      <Tabs active="Colaboradores" />
      {/* <SearchBar label="Pesquisar por" placeholder="Pesquisar por nome ou CPF"/> */}

      <TextField
                fullWidth
                id="outlined-size-small"
                size="small"
                label="Pesquisar por"
                type="search"
                color="info"
                onChange={e => handleChangeSearch(e.target.value)}
                placeholder="Pesquisar por nome"
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

      <Title text="Listagem de colaboradores" type="h2"/>

     { agents.length == 0 ? (

          <Box sx={{ 
                display: 'flex',
                justifyContent: 'center',
                }}>
            <CircularProgress />
          </Box>     
 
     ) : (
      <>
        <ResponsiveContainer device="desktop">
            <AgentsTable content={ agents } search={search} />
        </ResponsiveContainer>

        <ResponsiveContainer device="mobile">
            <AgentsMobileTable content={ agents } search={search} />
        </ResponsiveContainer>
      </>
     )
      
    }
      

      </>
    </Layout>
  )
}

export default Home
