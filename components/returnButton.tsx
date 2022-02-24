import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import Link from 'next/link'
import Left from '@mui/icons-material/ArrowBackSharp';

type Props = {
    text: string,
  };

const Btn = styled.button`
                color: rgba(234, 239, 237, 1);
                background-color: #fff;
                border-style: none;
                padding: 0.3%;
                text-align: center;
                border-radius: 8px; 
                box-shadow: 3px 3px 3px rgba(234, 239, 237, .6);
                cursor: pointer;
                margin-right: 1%;   
                &:hover {
                    background-color: rgba(181, 241, 221, .1);
                  }
`



const Button = (  ) => {
    return (
    <Link href="/" >
        <Btn>
            <Left sx={{ color: 'rgba(88, 113, 105, 1)' }}/>
        </Btn>
     </Link>
    );
}

export default Button;