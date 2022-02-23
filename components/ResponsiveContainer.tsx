import * as React from 'react';

import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

type Props = {
    children: JSX.Element,
    device: string,
  };

const Desktop = styled.div`                      
@media (max-width: 500px) {
        display: none;
    }
`

const Mobile = styled.div`
            padding-bottom: 2em;                      
            @media (min-width: 500px) {
                display: none;
            }
`


const ResponsiveContainer= ( { device, children }:Props ) => {

    return (
        { ...device == "desktop" ? (
            <Desktop>
                { children }
            </Desktop>
        ) : (
            <Mobile>
                { children }
            </Mobile>
        )}
        
    );
  }
  
  export default ResponsiveContainer;