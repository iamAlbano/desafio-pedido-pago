import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import Avatar from '@mui/material/Avatar';


const Text = styled.p(
`
      font-weight: 600;
      color: #34423D;
      margin: 1px; 
      
`
)


const UserContainer = styled.div`
      
        margin-left: 8%;
  `


type Props = {
    name: string,
    imagePath: string,
  };


const UserImage = ( {name, imagePath }:Props ) => {
    return (
        <>
            {/* <Avatar alt={ name } src={ imagePath} sx={{ width: 25, height: 25 }} /> */}

            <UserContainer>
                <Text >{ name }</Text>
            </UserContainer>
        </>
    );
}

export default UserImage;