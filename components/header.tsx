import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import User from './header/user'
import Logo from './brand'


const Line = styled.div`
      background-color: #fff;
      display: flex;
      align-items: center;
      height: 61px;
      padding: 1em 1.2em;
      border: 1px solid #EAEFED;
      box-shadow: 4px 4px 4px rgba(10, 10, 10, .1);
      @media (max-width: 500px) {
        justify-content: center;
      }
     
`

const Divider = styled.div`
                  background-color: #fff;
                  width: 80%;
                  height: 61px;
                  border: 1px solid #EAEFED;
                  margin: 0 15px;
                  @media (max-width: 500px) {
                    display: none;
                  }
`

const UserContainer = styled.div`
display: flex;
                  @media (max-width: 500px) {
                    // display: none;
                    position: absolute;
                   align-items: start;
                   margin-right: 80%;
                  }
`


const Header = () => {

  return (
    <Line> 

          <Logo />
          
          <Divider /> 

          <UserContainer>
            <User /> 
          </UserContainer>
          
    </Line>
  );
}

export default Header;