import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import SearchBar from '../components/container/search'

import api from "./api/agents";

import React, { useEffect, useState } from "react";

import Tabs from '../components/container/tabs'
import Title from '../components/container/title'
import Table from '../components/table/table'
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'




const Home: NextPage = (  ) => {

const [agents, setAgents] = useState();

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



const heads = ["Nome completo", "Departamento", "Cargo", "Unidade", "Status"]

  return (
    <>


   
      <Tabs active="Colaboradores" />
      <SearchBar placeholder="Pesquisar por nome ou CPF"/>

      <Title text="Listagem de colaboradores" type="h2"/>
    
      

      <Table header={ heads } rows={ agents } quant={3} />
      
    </>
  )
}

export default Home
