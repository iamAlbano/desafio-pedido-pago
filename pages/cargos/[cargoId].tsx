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
import roleInfoPage from '../../components/role/roleInfoPage'
import RoleInfoPage from '../../components/role/roleInfoPage';

type groupRulesType = {
  role: string,
  permissions: string[],
}

type roleType = {
    name: string,
    department: string,
    grouprules: groupRulesType,
}

type Props = {
    cargo: roleType | undefined,
}

const RolePage: NextPage = () => {

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
     
        <RoleInfoPage cargo={ cargo } />
      </>
    </Layout>
  )
}

export default RolePage;
