import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'


const Text = styled.h1`
                color: #34423D; 
                margin-top: 3%;
                text-align: left;            
                // @media (max-width: 420px) {
                    
                // }
  `


type Props = {
    title: String,
  };


const Title = ( { title }:Props ) => {
    return (
        <Text>
            { title }
        </Text>
    );
}

export default Title;