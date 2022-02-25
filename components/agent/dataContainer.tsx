import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';

import Title from '../container/title'
import Select from '../../components/select'
import ResponsiveContainer from '../ResponsiveContainer'


type Props = {
    departament: string,
    role: string,
    branch: string,
    status: string,
  };

const DataContainer= styled.div(
    `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3%;
    margin: 2% 1.2% 2% 0%;
    border: 2px solid rgba(234, 239, 237, 1);
    border-radius: 8px;             
    `
    )

const SelectContainer = styled.div(`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3%;
     
`)

const Divider = styled.div(`
    padding: 1.5%;
`)



export default function Data( { departament, role, branch, status }:Props ){

const defaultDepartment = departament
const allDepartments = ['Administrativo', 'Comercial', 'Eventos', 'Garantia de qualidade', 'SAC', 'Marketing', 'Produtivo', 'Visitação Médica']
const allRoles = ['Supervisor', 'Gerente', 'Analista', 'Diretor']
const allBranches = ['Farmácia Pedido Pago']



return (
    <>
    <ResponsiveContainer device="desktop">
        
        <DataContainer> 
        <Title text="Dados organizacionais" type="h2" />        
        <Divider /> 
            <SelectContainer> 
                <Select label="Departamento" defaultValue={'Administrativo'} options={ allDepartments }/> 
                <Divider />            
                <Select label="Cargo" defaultValue={'Supervisor'} options={ allRoles } />                  
            </SelectContainer>  

            < SelectContainer>
                <Select label="Unidade" defaultValue={'Farmácia Pedido Pago'} options={ allBranches }/>   
                <Divider />           
                <Select label="Status" defaultValue={'Ativo'} options={ ['Ativo', 'Inativo'] }/>                  
            </SelectContainer>

        </DataContainer>
        
    </ResponsiveContainer>

    <ResponsiveContainer device="mobile">
        <DataContainer> 

           
                <Select label="Departamento" defaultValue={'Administrativo'} options={ allDepartments }/> 
                <Divider /><Divider />               
                <Select label="Cargo" defaultValue={'Supervisor'} options={ allRoles } />                  
                <Divider /> <Divider />     
                <Select label="Unidade" defaultValue={'Farmácia Pedido Pago'} options={ allBranches }/>   
                <Divider /> <Divider />             
                <Select label="Status" defaultValue={'Ativo'} options={ ['Ativo', 'Inativo'] }/>                  
           

        </DataContainer>
    </ResponsiveContainer>
    </>
)
}