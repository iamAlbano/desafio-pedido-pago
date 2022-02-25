import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import Doc from '@mui/icons-material/ArticleTwoTone';
import Phone from '@mui/icons-material/PhoneInTalkTwoTone';
import Calendar from '@mui/icons-material/CalendarTodayTwoTone';

type Props = {
   text: string,
   label: string,
  };

  const Txt = styled.span(`
                font-size: 17px;
                color: rgba(88, 113, 105, 1);
                font-weight: 600;
                
   
`)

const Label = styled.label`
                height: 12px;
                font-size: 12px;
                color: rgba(88, 113, 105, 1);
                
`
const TextContainer = styled.div`
                display: flex;
                margin-top: 2%;
                flex-direction: column; 
                white-space : nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                
`
const IconContainer = styled.div`
                margin: 1% 5%;
                padding: 1.5% 2%;
                background: #CAD6D1;
                border-radius: 200%;
                svg {
                    width: 100%;
                    vertical-align: middle;
                }
`

const Container = styled.div(`
                display: flex;          
                padding: 3%;
                background-color: rgba(245, 250, 248, 1);
                border-radius: 8px;
                width: 100%;
                border: 2px solid rgba(202, 214, 209, 1);

`)

export default function Info( { text, label}:Props ){

    return (
            <Container>
                <IconContainer>
                    {
                        label == "CPF" && (
                            <Doc />
                        )
                    } {
                        label == "Telefone" && (
                            <Phone />
                        )
                    } {
                        label == "Nascimento" && (
                            <Calendar />
                        )
                    }
                </IconContainer>

                <TextContainer>
                <Label>{label}</Label>
                <Txt>
                 { text }
                </Txt>
                </TextContainer>
            </Container>
    )

}