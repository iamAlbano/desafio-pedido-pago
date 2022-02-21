import * as React from 'react';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

import Link from 'next/link'
import Image from 'next/image'


const Brand = () => {

  return (
    <Link href="/">
        <Image  src="/images/brand.svg"
                width="35,47px" 
                height="34,69px" 
                alt="Pedido Pago" />
    </Link>
  );
}

export default Brand;