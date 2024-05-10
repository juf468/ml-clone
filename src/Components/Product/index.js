import React from 'react'
import { 
  Container,
  Panel, 
  Column,
  Galery,
  Description,
  Section
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
        {/* <SaleProduct/>
        <SalespersonInfo/> */}
        <Warranty/>
        </Column>
      </Panel>
    </Container>
  )
}

const Info = ()=>{
  return (
    <Description>
    <h2>Descripción</h2>
    <br/>
    <p>
    <p>Triple cámara  50 Mpx/2 Mpx te permitirán tomar imágenes con más detalles y 
    lograr efectos únicos como el famoso modo retrato de poca profundidad de campo.</p>
    <br/><br/>
    <p>Además, el dispositivo cuenta con cámara frontal de 5 Mpx para
    que puedas sacarte divertidas selfies o hacer videollamadas.</p>
    <br/><br/>
    <span>Más para ver</span>
    <p>Con su pantalla PLS de 6.5", disfrutá de colores intensos y mayor nitidez en todos tus contenidos.</p>
    <br/><br/>
    <span>Mayor rendimiento</span>
    <p>Su memoria RAM de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar.</p>
    <br/><br/>
    <span>Batería de duración superior</span>
    <p>¡Desenchufate! Con la súper batería de 5000 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas.</p>
    <br/><br/>
    <span>Gran capacidad de almacenamiento</span>
    <p>Con su memoria interna de 128 GB podrás almacenar archivos y aplicaciones de gran tamaño sin necesidad de subirlos a la nube y aprovechar tus momentos sin conexión para darles el máximo uso.</p>
    </p>
    </Description>
  )
}

const Warranty =()=>{
  return (
    <Section>
      <div>
        <h2>Garantía</h2>
        <br/>
        <span>
          <p className='title'>Compra Protegida con Mercado Pago</p>
          <p className='description'>Recibe el producto que esperabas o te devolvemos tu dinero</p>
        </span>
        <span>
          <p className='title'>Grarantía Del Vendedor</p>
          <p className='description'>Garantía del vendedor: 6 meses</p>
        </span>
        <a href='#'>Conocé más sobre la garantía</a>
      </div>
    </Section>
  )
}