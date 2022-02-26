import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import api from "../api/agents";

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'

import Tabs from '../../components/container/tabs'
import Title from '../../components/container/title'
import ResponsiveContainer from '../../components/ResponsiveContainer'
import AgentImage from '../../components/agent/agentImage';
import Layout from '../../components/layout'

import Info from '../../components/agent/info'
import DataContainer from '../../components/agent/dataContainer'
import AgentInfoPage from '../../components/agent/agentInfoPage'

type DocumentType = {
  number: string,
  type: string,
}

type PhoneType = {
  ddi: string,
  ddd: string,
  number: string,
}

type agentType = {
  id: number,
  name: string | undefined,
  email: string,
  department: string,
  birth_date: string,
  image: string,
  branch: string,
  role: string,
  status: string,
  document: DocumentType,
  phone: PhoneType,
}

type Props = {
  agent: agentType | undefined,
};




const AgentPage: NextPage = () =>  {
  
const router = useRouter()
const { colaboradorId } = router.query
const [agent, setAgent] = useState();

console.log(colaboradorId)

useEffect(() => {
  
  
    api
      .get(`/agent/${colaboradorId}`)
      .then((response) => {
        setAgent(response.data.agent)
      }
      )
      .catch((err) => {
        router.push(`/404`)
        // console.error("erro: " + err);
      });
    }, []);
    
    
  
  return (

        <Layout title="Detalhes do colaborador">
            <>
          <AgentInfoPage agent={ agent } />

            </>
        </Layout>

  )
}

export default AgentPage

