import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

type Props = {
    text: string,
  };

const Btn = styled.button`
                color: #34423D ;
                background-color: #fff;
                padding: 4% 16%;
                border: 2px solid rgba(181, 241, 221, 1);
                font-weight: 600;
                text-align: center;
                border-radius: 8px; 
                cursor: pointer;   
                width: 100%;
                
                &:hover {
                    background-color: rgba(181, 241, 221, .1);
                  }
`



const Button = ( { text }:Props ) => {
    return (
     <Btn>
         { text }
     </Btn>
    );
}

export default Button;