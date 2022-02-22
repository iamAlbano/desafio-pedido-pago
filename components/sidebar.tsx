import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

const SideDiv = styled.div`
                    height: 100vh;
                    width: 13.3%;
                    background-color: #fff;
                    border: 1px solid #EAEFED;
                    position: absolute;
                    box-shadow: 4px 4px 4px rgba(10, 10, 10, .1);
                    @media (max-width: 900px) {
                        display: none;
                      }

`

const Sidebar = () => {

    return (
      <SideDiv />
    );
  }
  
  export default Sidebar;