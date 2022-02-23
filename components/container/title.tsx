import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'


const Text = styled.h1`
                color: #34423D; 
                font-size: 18pt;
                margin-top: 2%;
                text-align: left;            
  `

const Subtitle = styled.h2`
                color: #34423D; 
                font-size: 13pt;
                margin-top: 2%;
                text-align: left;            
  `


type Props = {
    text: string,
    type: string
  };


const Title = ( { text, type }:Props ) => {
    return (
        {
            ...type == "h1" ? (
                <Text>
                    { text }
                </Text>
            )  : (
                <Subtitle>
                    { text }
                </Subtitle>
                )
            }
        
        
    );
}

export default Title;