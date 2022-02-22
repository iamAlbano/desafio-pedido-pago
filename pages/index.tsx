import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import SearchBar from '../components/container/search'

import agents from "../services/api";

import React, { useEffect, useState } from "react";

import Tabs from '../components/container/tabs'
import Title from '../components/container/title'
import Table from '../components/table/table'



const Home: NextPage = (  ) => {

  

  useEffect(() => {
    
    agents
      .get("/agents")
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  // var axios = require('axios');

  // var config = {
  //   method: 'get',
  //   url: 'https://pp-api-desafio.herokuapp.com/agents',
  //   headers: { }
  // };
  
  // axios(config)
  // .then(function (response) {
  //   console.log('deu certoooo');
  //   console.log(JSON.stringify(response.data));
  // })
  // .catch(function (error) {
  //   console.log('erro');
  //   console.log(error);
  // });


  return (
    <>

   
      <Tabs active="Colaboradores" />
      <SearchBar placeholder="Pesquisar por nome ou CPF"/>

      <Title text="Listagem de colaboradores" type="h2"/>
      
      <Table />
      
    </>
  )
}

export default Home
