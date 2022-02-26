import * as React from 'react';

import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import CircularProgress from '@mui/material/CircularProgress';


const Container = styled.div`           
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    @media (min-width: 800px) {
                        margin: 50vh;
                    }

                    @media (max-width: 800px) {
                        margin-top: 50vh;
                    }
                
`

const LoadingPage= (  ) => {

    return (
       
        <Container>
            
                <CircularProgress />
            
        </Container>
    );
  }
  
  export default LoadingPage;