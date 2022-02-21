import * as React from 'react';
import Head from 'next/head'

import Header from './header'

import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

type Props = {
    children: JSX.Element,
  };


const Line = styled.div`
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 61px;
`

const Layout = ( { children }:Props ) => {

  return (
    <>
        <Head>
            <title>Pedido Pago</title>
           
        </Head>
        <Header />
        <main className='main-container'>
                { children }
        </main>


    </>
  );
}

export default Layout;