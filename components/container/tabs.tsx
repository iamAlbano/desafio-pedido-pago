import * as React from 'react';

import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import Link from 'next/link'

import FloatMenu from '../floatMenu'
import ResponsiveContainer from '../ResponsiveContainer';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

type Props = {
    active: string,
  };

const Tab = styled.ul`
display: flex;
flex-direction: row;
justify-content: left;
align-items: center;
cursor: pointer; 
color: #34423D; 
list-style: none;
padding-bottom: 3%;
padding-left: 0;
`

const Button = styled.li`
text-align: center;
padding-bottom: 0.5em;
margin: 0 1.5em 0em 0;
width: 35%;
font-weight: bold;
color: ${props =>
    props.active ? '#34423D' : '#A3B8B0'};
border-bottom: ${props =>
    props.active ? '2px solid #22E0A1' : '2px solid #EAEFED'};
`







const Tabs = ( { active }:Props ) => {

    return (
        <>
        <ResponsiveContainer device="desktop">
            <Tab>     
                    <Link href="/" > 
                        <Button {...active == "Colaboradores" &&({ active })} >
                                <a>Colaboradores</a>
                        </Button>
                    </Link> 

                    <Link href="/cargos" > 
                        <Button {...active == "Cargos" &&({ active })} >
                                <a>Cargos</a>
                        </Button>
                    </Link> 
            
            </Tab>
        </ResponsiveContainer>
        <ResponsiveContainer device="mobile">
            <OutlinedInput
                id="outlined-read-only-input"
                type="text"
                fullWidth
                disabled
                label="aba"
                value={ active == "Cargos" ? "Cargos" : "Colaboradores" }
                // onChange={handleChange('password')}
                endAdornment={
                    <FloatMenu />          
                }
            />
        </ResponsiveContainer>
        </>
    );
  }
  
  export default Tabs;