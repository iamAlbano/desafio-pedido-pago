import * as React from 'react';
import Head from 'next/head'

import Header from './header'
import Sidebar from './sidebar'
import Container from './container/container';

import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'


type Props = {
    children: JSX.Element,
  };




const Layout = ( { children }:Props ) => {

  return (
    <>
        <Head>
            <title>Pedido Pago</title>
           
        </Head>

        <Header />

        <Sidebar />

         <Container>
            { children }
         </Container>
     
    
    </>
  );
}

export default Layout;