import type { NextPage } from 'next'
import Link from 'next/link'

import styled from '@emotion/styled'
import { css, jsx } from '@emotion/react'

const Container = styled.div`
                    display: flex;
                    margin: 0 auto;
                    flex-direction: column;
                    justify-content: center;
`

const TitleContainer = styled.div`
                    display: flex;
                    margin: 0 auto;
                    margin-top: 3%;
                    flex-direction: column;
                    justify-content: center;
`

const Title = styled.h1`
                    margin: 0 auto;
                    color: rgba(104, 109, 107, 1);
`

const Button = styled.a`
                    color: rgba(52, 66, 61, 1);
                    background-color: #fff;
                    border-style: none;
                    padding: 2% 4%;
                    margin: 5% 40%;
                    font-size: 15pt;
                    font-weight: bold;
                    text-align: center;
                    border-radius: 8px; 
                    border: 2px solid rgba(181, 241, 221, 1);
                    box-shadow: 3px 3px 3px rgba(234, 239, 237, .6);
                    cursor: pointer;  
                    &:hover {
                        background-color: rgba(181, 241, 221, .1);
                    }
`
const Number = styled.span`
                    color: rgba(141, 201, 181, 1);
                    font-size: 100pt;
                    margin: 0 auto;
`


const NotFound: NextPage = (  ) => {
return (
    <Container>
        <TitleContainer>
            <Number>
                404
            </Number> 
            <Title>
                Página não encontrada 
            </Title>
        </TitleContainer>

        <Link href="/">
            <Button>Voltar</Button>
        </Link>
    </Container>
)


}

export default NotFound
