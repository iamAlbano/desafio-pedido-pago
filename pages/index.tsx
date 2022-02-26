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

type objectType = {
  name: string,
  image: string,
  status: string,
  department: string,
  role: string,
  branch: string,
}

type Props = {
    agents: objectType[],
  };

const Home: NextPage = (  ) => {

const [agents, setAgents] = useState([]);

// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://pp-api-desafio.herokuapp.com/agents',
//   headers: { }
// };

// axios(config)
// .then((response) =>
//   setAgents(response.data)
// )
// .catch(function (error) {
//   console.log(error);
// });

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

  

  return (
    <Layout title="Organização">
      <>
  
      <Tabs active="Colaboradores" />
      <SearchBar label="Pesquisar por" placeholder="Pesquisar por nome ou CPF"/>

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
            <AgentsTable content={ agents }/>
        </ResponsiveContainer>

        <ResponsiveContainer device="mobile">
            <AgentsMobileTable content={ agents } />
        </ResponsiveContainer>
      </>
     )
      
    }
      

      </>
    </Layout>
  )
}

export default Home
