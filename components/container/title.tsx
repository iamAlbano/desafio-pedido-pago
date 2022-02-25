import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import { useRouter } from 'next/router'

import ReturnButton from '../../components/returnButton'

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
    type: string,
  };


const Title = ( { text, type }:Props ) => {
    
    const router = useRouter()
  

    return (
        {
            ...type == "h1" ? (
                <Text>
                { router.pathname != '/'  && (
                    <ReturnButton />
                )}
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