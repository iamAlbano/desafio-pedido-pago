import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import Avatar from '@mui/material/Avatar';

type Props = {
    name: string,
    imagePath: string,
    actived: string,
    status: string,
  };


const Text = styled.p(
`
      font-weight: 600;
      margin-left: 5%;
      color: rgba(88, 113, 105, 1);
      vertical-align: top;    
`
)

const InactiveText = styled.p(
    `
        font-weight: 600;
        margin-left: 5%;
        color: rgba(163, 184, 176, 1);
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






const UserImage = ( {name, imagePath, status }:Props ) => {
    return (
        <>
            <UserContainer>
                <ImageContainer>
                    <Avatar alt={ name } src={ imagePath}  />
                </ImageContainer>

                {
                    status == "active" ? (
                        <Text>
                            { name }
                         </Text>
                    ) : (
                        <InactiveText>
                            { name }
                        </InactiveText>
                    )
                }
                
            </UserContainer>
        </>
    );
}

export default UserImage;