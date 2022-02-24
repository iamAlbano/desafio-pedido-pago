import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from "react";

import api from "../api/agents";


import Layout from '../../components/layout'
import Title from '../../components/container/title'
import Info from '../../components/role/info'
import PermissionsTable from '../../components/table/roles/permissionsTable'



const Home: NextPage = () => {

  const [cargo, setCargo] = useState();

  const router = useRouter()
  const { cargoId } = router.query


  useEffect(() => {
    
    
    api
      .get(`/role/${cargoId}`)
      .then((response) => {
        setCargo(response.data.role)
      }
      )
      .catch((err) => {
        console.error("erro: " + err);
      });
  }, []);


  return (

    <Layout title="Cargos e permissões">
      <>
     
      <Title text="Dados do cargo" type="h2"/>
      <Info name={cargo?.name} department={cargo?.department} />
      <Title text="Listagem de permissões" type="h2" />

      <PermissionsTable content={cargo?.grouprules} />
      </>
    </Layout>
  )
}

export default Home;
