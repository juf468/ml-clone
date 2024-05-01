import React from 'react'
import { 
  Container,
  Panel, 
  Column,
  Galery, 
  Info,
  SaleProduct,
  SalespersonInfo,
        } from './styles';

export const Product = () => {
  return (
    <Container>
      <Panel>
        <Column>
        <Galery>
          <img src='https://http2.mlstatic.com/D_NQ_NP_870142-MLA54920742936_042023-F.webp' alt='Product'/>
        </Galery>
        <Info/>
        </Column>
        <Column>
        <SaleProduct/>
        <SalespersonInfo/>
        <Galery/>
        </Column>
      </Panel>
    </Container>
  )
}

