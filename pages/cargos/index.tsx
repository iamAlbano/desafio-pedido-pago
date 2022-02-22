import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/header'
import SearchBar from '../../components/container/search'
import Tabs from '../../components/container/tabs'

const Home: NextPage = () => {
  return (
    <>
   
      <Tabs active="Cargos" />
        <SearchBar placeholder="Pesquisar por cargos" />
   
    </>
  )
}

export default Home
