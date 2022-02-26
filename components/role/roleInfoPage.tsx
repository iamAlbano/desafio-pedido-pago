import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from "react";


import Layout from '../../components/layout'
import Title from '../../components/container/title'
import Info from '../../components/role/info'
import PermissionsTable from '../../components/table/roles/permissionsTable'

type groupRulesType = {
    role: string,
    permissions: string[],
  }
  
  type roleType = {
      name: string,
      department: string,
      grouprules: groupRulesType[] | undefined,
  }
  
  type Props = {
      cargo: roleType | undefined,
  }

  export default function RoleInfoPage( { cargo }:Props ){
    return (
    <>
    <Title text="Dados do cargo" type="h2"/>
      <Info name={`${cargo?.name}`} department={`${cargo?.department}`} />
      <Title text="Listagem de permissões" type="h2" />

      <PermissionsTable content={cargo?.grouprules} />
            
    </>
    )
}