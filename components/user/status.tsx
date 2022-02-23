import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

type Props = {
    status: string,
  };

  const UserStatus = styled.div`
                        width: 72px;
                        height: 24px;
                        border-radius: 80px;
                        padding: 4px, 8px, 4px, 8px; 
                        margin: 0 auto;
                        font-weight: 500;
                        background-color: ${props =>
                            props.status ? '#B5F1DD' : '#EAEFED'};
  `




  const Status = ( { status }:Props ) => {
    return (
        <UserStatus {...status == "active" &&( { status } )} >
            { status == "active" ? "Ativo" : "Inativo" }
        </UserStatus>
    );
}

export default Status;