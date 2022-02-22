import * as React from 'react';

import Title from './title'

import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'


const Box = styled.div`
              width: 99.7% !important;
              background-color: #fff;
              border-radius: 8px; 
              margin-top: 1%; 
              padding: 15px;
              box-shadow: 4px 4px 4px rgba(10, 10, 10, .1);
              
`


type Props = {
  children: JSX.Element,
};


const MainContainer = styled.div`
      display: flex;
      flex-direction: column;
      @media (min-width: 900px) {
        margin-left: 13.3%;   }
      
`
const DivBox = styled.div`
         
      @media (min-width: 900px) {
        margin: 0 auto !important;
        width: 100vh;   }
      @media (max-width: 900px) {
        margin: 0 2% !important;  }
      
`





const Container = (  { children }:Props ) => {

    return (
      <MainContainer>

      <DivBox> 
        <Title title="Organização" />   
          <Box>
              { children }
          </Box>
          
      </DivBox>
      </MainContainer>
    );
  }
  
  export default Container;
          
