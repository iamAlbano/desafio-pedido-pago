import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import Avatar from '@mui/material/Avatar';


const Text = styled.p(
`
      font-weight: 600;
      color:rgba(52, 66, 61, 1);
      margin: 0% 0% 1% 5%;
      vertical-align: top;     
`
)

const EmailText = styled.p(
    `
          color: rgba(52, 66, 61, 1);
          margin: 0% 0% 1% 5%;
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

  const TextContainer = styled.div`
        margin: 1% 1.5%;
        flex-direction: column;
  `



type Props = {
    name: string,
    email: string,
    imagePath: string,
  };


const UserImage = ( {name, email, imagePath }:Props ) => {
    return (
        <>
            <UserContainer>

                <ImageContainer>
                    <Avatar alt={ name } src={ imagePath} sx={{ width: 50, height: 50 }} />
                </ImageContainer>

                <TextContainer>      
                    <Text >{ name }</Text>
                    <EmailText >{ email }</EmailText>
                </TextContainer>

            </UserContainer>
        </>
    );
}

export default UserImage;