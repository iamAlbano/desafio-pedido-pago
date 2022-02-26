import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'

import Tabs from '../../components/container/tabs'
import Title from '../../components/container/title'
import ResponsiveContainer from '../../components/ResponsiveContainer'
import AgentImage from '../../components/agent/agentImage';
import Layout from '../../components/layout'

import Info from '../../components/agent/info'
import DataContainer from '../../components/agent/dataContainer'

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
    id: number ,
    name: string ,
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

  export default function AgentInfoPage( { agent }:Props ){
        return (
        <>
                <AgentImage 
                    name={`${agent?.name}`} 
                    email={`${agent?.email}`} 
                    imagePath={`${agent?.image}`} />

                <Title text="Informações pessoais" type="h2" />
                  
                    <Info 
                        cpf={`${agent?.document.number.substring(0, 3)} ${agent?.document.number.substring(3, 6)} ${agent?.document.number.substring(6, 9)} ${agent?.document.number.substring(9, 11)}`} 
                        phone={`+${agent?.phone.ddi} ${agent?.phone.ddd} ${agent?.phone.number.substring(0, 5)} ${agent?.phone.number.substring(5, 10)}`} 
                        date={ `${agent?.birth_date.substring(8, 10)}/${agent?.birth_date.substring(5, 7)}/${agent?.birth_date.substring(0, 4)}` } />

                
                    <DataContainer 
                          departament={`${agent?.department}`}
                          role={`${agent?.role}`}
                          branch={`${agent?.branch}`}
                          status={`${agent?.status}`}  />
        </>
        )
    }