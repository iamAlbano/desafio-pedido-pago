import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import Image from 'next/image'


const Brand = () => {

  return (
    
        <Image  src="/images/brand.svg"
                width="35,47px" 
                height="34,69px" 
                alt="Pedido Pago" />
    
  );
}

export default Brand;