import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

interface IUserStyled {
    active: string;
 }

type Props = {
    status: string,
  };

  const UserStatus = styled.span<IUserStyled>`
                              
                        text-align: center;
                        border-radius: 80px;
                        margin: 0 auto;
                        padding: 2% 18%;
                        font-weight: 600;
                        @media (min-width: 800px) {
                            padding: 5% 20%; 
                        }               
                        background-color: ${props =>
                            props.active == 'active' ? '#B5F1DD' : '#EAEFED'};
  `





  const Status = ( { status }:Props ) => {
    return (
        <UserStatus active={status} >
            { status == "active" ? "Ativo" : "Inativo" }
        </UserStatus>
    );
}

export default Status;