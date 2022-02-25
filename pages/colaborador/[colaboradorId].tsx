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


export default function AgentPage ( ) {

  const [agent, setAgent] = useState();

  const router = useRouter()
  const { colaboradorId } = router.query

  



  useEffect(() => {
    
    
    api
      .get(`/agent/${colaboradorId}`)
      .then((response) => {
        setAgent(response.data.agent)
      }
      )
      .catch((err) => {
        console.error("erro: " + err);
      });
  }, []);

 

  


  
  return (

        <Layout title="Detalhes do colaborador">
            <>
                <AgentImage 
                    name={agent?.name} 
                    email={agent?.email} 
                    imagePath={agent?.image} />

                <Title text="Informações pessoais" type="h2" />
                  
                    <Info 
                        cpf={`${agent?.document.number.substring(0, 3)} ${agent?.document.number.substring(3, 6)} ${agent?.document.number.substring(6, 9)} ${agent?.document.number.substring(9, 11)}`} 
                        phone={`+${agent?.phone.ddi} ${agent?.phone.ddd} ${agent?.phone.number.substring(0, 5)} ${agent?.phone.number.substring(5, 10)}`} 
                        date={ `${agent?.birth_date.substring(8, 10)}/${agent?.birth_date.substring(5, 7)}/${agent?.birth_date.substring(0, 4)}` } />

                
                    <DataContainer 
                          departament={agent?.department}
                          role={agent?.role}
                          branch={agent?.branch}
                          status={agent?.status}  />
          

            </>
        </Layout>

  )
}

