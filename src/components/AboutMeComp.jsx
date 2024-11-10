import { Button, Typography } from '@material-tailwind/react'
import ModalComp from './ModalComp'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { PhoneIcon } from '@heroicons/react/16/solid'

const AboutMeComp = () => {
  return (
    <Container className="bgAbout p-3 rounded-lg" data-aos="fade-up">
    <Row className="items-center">
      <Col md={6} sm={12} className="my-3 text-center">
        <Typography variant="lead">
          Hola, soy Santiago Agustín Jaime
        </Typography>
        <Typography variant="h1">Full stack Developer</Typography>
        <Button variant="gradient">
          <Link
            to={"/#contacto"}
            className="no-underline text-gray-50 flex items-center gap-2"
          >
            <PhoneIcon className="w-5" /> Contacto
          </Link>
        </Button>
      </Col>
      <Col md={6} sm={12} className="flex justify-center my-3">
        <img
          src="/yo.png"
          alt="Santi Jaime-Foto"
          className="rounded-full max-w-72 sombra transition-all"
        />
      </Col>
      <hr className="mt-3 text-gray-700" />
      <Typography variant="h3">Sobre mí:</Typography>
      <Typography>
        Soy de Tucumán, Argentina. Desde que soy pequeño me gusta todo lo
        relacionado a la tecnología, especialmente las computadoras. Tras
        estar un año en Ingeniería en Sistemas de la Información,
        determiné que me encanta programar. Tras dejar la facultad,
        realicé un par de bootcamps para ampliar mi conocimiento en este
        maravilloso mundo.
      </Typography>
      <Typography className="font-bold underline">
        Bootcamps realizados:
      </Typography>
      <ul className="list-disc ms-4">
        <li className="my-2">
          Rolling Code School - Fullstack Developer:
          <ModalComp
            buttonText="Ver certificado"
            img="/Certificado RollingCode.png"
          />
        </li>
        <li className="my-2">
          Coderhouse - Carrera de Desarrollo Backend:
          <ModalComp buttonText="Certificado próximamente" />
        </li>
      </ul>
    </Row>
  </Container>
  )
}

export default AboutMeComp