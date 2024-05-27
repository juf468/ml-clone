import React from 'react'
import { Container, Estado, Row, Price, Card, Color, Cantidad, ButtonCard, Button, Beneficios, HeartIcon, CheckIcon, ShieldIcon, CupIcon  } from "./styles";

export const SaleProduct = () => {
  return (
    <Container>
      <Estado>Nuevo | 4 vendidos </Estado>
      
      <Row>
        <h1>Samsung Galaxy A14 128GB Negro 4GB RAM</h1>
        <HeartIcon/>
      </Row>
    <Price> $ 359.999</Price>
    <Card>
      <CheckIcon/>
      <div>
        <span className='title'> 
          Llega gratis mañana
        </span>
        <span className='detail'> Beneficio Mercado Puntos</span>
        <a href='#' className="more">Ver más formas de entrega</a>
      </div>
    </Card>

    <Color>
    Color: <strong>Negro</strong>
    </Color>

    <Cantidad>
      <p>Cantidad</p>
      <strong>1 unidad</strong>
      <input type='number' value=""/>
      <span>(+ 50 disponibles)</span>
    </Cantidad>

    <ButtonCard>
      <Button className='solid'>Comprar ahora</Button>
      <Button>Agregar al carrito</Button>
    </ButtonCard>

    <Beneficios>
      <li>
        <ShieldIcon/>
        <p>Compra Protegida,<span>
            recibí el producto que esperabas o te devolvemos tu dinero.
        </span></p>
      </li>

      <li>
        <CupIcon/>
        <p>Mercado Puntos,<span>
           Sumas 47 puntos.
        </span></p>
      </li>
    </Beneficios>
    </Container>
  )
}


