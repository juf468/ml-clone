
import React from 'react'
import { Container, Title, Card, LocationIcon, PlatinumIcon, Reputation, Box, Row, SuportIcon, ClockIcon, Link  } from "./styled";


const SalesPersonInfo = () => {
  return (
    <Container>
      <Title>Información del vendedor</Title>
      <Card>
      <LocationIcon/>
      <div>
        <p>Ubicación</p>
        <strong>Buenos Aires Argentina</strong>
      </div>
      </Card>
      <Card>
      <PlatinumIcon/>
      <div>
        <p className='platinum'>MercadoLider Platinum</p>
        <strong >¡Es uno de los mejores del sitio!</strong>
      </div>
      </Card>
      <Reputation>
        <Box>
          <li/>
          <li/>
          <li/>
          <li/>
          <li className='active'/>
        </Box>
      </Reputation>
      <Row>
        <div>
          <strong>9452</strong>
          <span>Ventas en los ultimos 60 días</span>
        </div>
        <div>
          <strong>
            <SuportIcon/>
          </strong>
          <span>Brinda buena atención</span>
        </div>
        <div>
          <strong>
            <ClockIcon/>
          </strong>
          <span>Entrega sus productos a tiempo</span>
        </div>
      </Row>
      <Link href="#">Ver más datos de este vendedor</Link>
    </Container>
  )
}

export default SalesPersonInfo

