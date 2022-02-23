import * as React from 'react';

import Title from './title'

import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'


const Box = styled.div`
              width: 100% !important;
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
      @media (min-width: 1000px) {
        margin-left: 13.3%;   }
      
`
const DivBox = styled.div`
      margin: 0 auto !important;

      @media (min-width: 1430px) {
        width: 130vh;   }

      @media (max-width: 1430px) {
        width: 170vh;   }

        @media (max-width: 1280px) {
          width: 130vh;   }

        @media (max-width: 900px) { 
            width: 100vh;  }

        @media (max-width: 700px) { 
          width: 65vh;  }

        @media (max-width: 400px) { 
          width: 50vh;  }
      
`





const Container = (  { children }:Props ) => {

    return (
      <MainContainer>
        <DivBox> 
          <Title text="Organização" type="h1" />   
            <Box>
                { children }
            </Box>
            
        </DivBox>
      </MainContainer>
    );
  }
  
  export default Container;
          
