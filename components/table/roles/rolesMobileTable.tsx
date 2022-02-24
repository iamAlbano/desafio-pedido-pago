import * as React from 'react';

import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Button from '../../button'
import Status from '../../agent/status'
import Title from '../../container/title'

type Props = {
    content: object[],
  };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

const Head = styled.p`
  color: #587169;
  font-weight: 600;
`

const Text = styled.p`
    color: #587169;
`

export default function ControlledAccordions( { content }:Props ) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    let key = 0

  return (

      <div>

      { content?.map((role) => {
        key++
        return(    
            <Accordion 
            expanded={expanded === 'panel'+key } 
            onChange={handleChange('panel'+key)} 
            key={key}>

                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography sx={{ width: '100%', flexShrink: 0 }}>
               
                <Container>
                          <Head>Cargo</Head>
                          <Text>{ role?.name }</Text>
                    </Container>              
                   
                </Typography>
                
                {/* <Typography sx={{ color: 'text.secondary' }}>Nome completo</Typography> */}

                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            
                            <Grid item xs={7}>
                                <Head>Departamento</Head>
                                <Text>{ role?.departament }</Text>
                            </Grid>
                            <Grid item xs={7}>
                                <Head>Colaboradores</Head>
                                <Text>{ role?.agents_quantity }</Text>
                            </Grid>     
                            
                        </Grid>
                       
                        <Button id={ key } path="/cargos" />
                    </Box>
                </Typography>
                </AccordionDetails>
            </Accordion>
        )
      })}

    </div>
  );
}
