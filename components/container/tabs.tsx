import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import Link from 'next/link'

const Tab = styled.ul`
display: flex;
flex-direction: row;
justify-content: left;
align-items: center;
cursor: pointer; 
color: #34423D; 
list-style: none;
padding-bottom: 5%;
padding-left: 0;
@media (max-width: 500px) {
    display: none;  }
`

const Button = styled.li`
text-align: center;
padding-bottom: 1em;
margin: 0 2em 0em 0;
width: 35%;
font-weight: bold;
color: ${props =>
    props.active ? '#34423D' : '#A3B8B0'};
border-bottom: ${props =>
    props.active ? '2px solid #22E0A1' : '2px solid #EAEFED'};
`

type Props = {
    active: string,
  };

const Tabs = ( { active }:Props ) => {

    return (
        <Tab>     
                <Button {...active == "Colaboradores" &&({ active })} >
                    <Link href="/" > 
                            <a>Colaboradores</a>
                    </Link> 
                </Button>

                <Button {...active == "Cargos" &&({ active })}
                >
                    <Link href="/cargos" > 
                            <a>Cargos</a>
                    </Link> 
                </Button>
          
        </Tab>
    );
  }
  
  export default Tabs;