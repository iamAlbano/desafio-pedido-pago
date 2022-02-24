import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import Avatar from '@mui/material/Avatar';


const Text = styled.p(
`
      font-weight: 600;
      color: #34423D;
      margin-left: 5%;
      vertical-align: top;
      
`
)


const UserContainer = styled.div`
      display: flex;
      flex-direction: row;
      margin: 0;
  `

  const ImageContainer = styled.div`
        margin-top: 1%;
  `



type Props = {
    name: string,
    imagePath: string,
  };


const UserImage = ( {name, imagePath }:Props ) => {
    return (
        <>
            <UserContainer>
                <ImageContainer>
                    <Avatar alt={ name } src={ imagePath}  />
                </ImageContainer>

                <Text >{ name }</Text>
            </UserContainer>
        </>
    );
}

export default UserImage;