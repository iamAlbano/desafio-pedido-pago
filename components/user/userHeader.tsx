import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import Avatar from '@mui/material/Avatar';


function stringToColor(string: string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }

function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }



const Text = styled.p(
    {
      color: '#34423D',
      margin: '1px',
      fontSize: '9pt',  
    },

    `@media (max-width: 590px) {
              display: none;
    }`,

    props => ({
      fontWeight: props.fontWeight
    })
  )

  const UserContainer = styled.div`
                          margin-left: 1em;
                          @media (max-width: 420px) {
                            display: none;
                          }
  `





const User = () => {
    return (
        <>
            
            <Avatar {...stringAvatar('Luiz Zlochevsky')} />

            <UserContainer>
                <Text fontWeight={'bold'}>Luiz Zlochevsky</Text>
                <Text fontWeight={'normal'}>meus dados</Text>
            </UserContainer>
        </>
    );
}

export default User;