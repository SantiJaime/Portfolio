import { Button, Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import ModalComp from "../components/ModalComp";
import TabsComp from "../components/TabsComp";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { Formik } from "formik";
import { errorEmail } from "../utils/validationSchemas";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const HomePage = () => {
  const IMAGES = [
    "/tecnologias/js.png",
    "/tecnologias/ts.png",
    "/tecnologias/react.png",
    "/tecnologias/tailwind.png",
    "/tecnologias/nodejs.png",
    "/tecnologias/mongodb.png",
  ];

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const sendEmail = async ({ email, nombre, mensaje }) => {
    const templateParams = {
      from_name: nombre,
      from_email: email,
      message: mensaje,
    };

    return emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => "Correo enviado correctamente")
      .catch((error) => Promise.reject(error));
  };

  const handleToastClick = (values) => {
    toast.promise(sendEmail(values), {
      loading: "Enviando correo...",
      success: (data) => {
        return data;
      },
      error: (error) => {
        return error;
      },
    });
  };
  return (
    <>
      <section id="sobremi" className="text-gray-50 my-5">
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
      </section>
      <section id="proyectos">
        <TabsComp />
        <div
          className="mx-auto max-w-7xl px-6 lg:px-8 mb-5"
          data-aos="flip-right"
        >
          <h1 className="text-center font-semibold leading-8 text-gray-50">
            Tecnologías utilizadas
          </h1>
          <hr />
          <div className="mx-auto grid max-w-lg grid-cols-2 sm:max-w-xl sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 lg:mx-0 lg:max-w-none lg:grid-cols-6 items-center">
            {IMAGES.map((img, index) => (
              <img
                className="col-span-1 max-h-24 w-full object-contain my-4"
                src={img}
                alt={img.split("/")[2]}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="contacto">
        <Container>
          <h1 className="text-center text-gray-50">Contáctame</h1>
          <hr />
          <Row className="text-gray-50">
            <Col md={6} sm={12} className="my-3 flex flex-col items-center" data-aos="fade-down">
              <Typography variant="h3">Tus dudas no molestan</Typography>
              <Typography variant="paragraph">
                Rellena el formulario, y me pondré en contacto tan pronto como
                sea posible. También podés escribirme a través de mensajes de
                LinkedIn o enviando un correo directamente aquí abajo.
              </Typography>
              <a
                className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 p-2 flex flex-col items-center justify-center rounded-lg text-gray-50 no-underline w-75 my-3"
                href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
              >
                <EnvelopeIcon className="w-10" />
                <Typography variant="lead">
                  {import.meta.env.VITE_CONTACT_EMAIL}
                </Typography>
              </a>
            </Col>
            <Col md={6} sm={12} className="my-3" data-aos="fade-up">
              <Formik
                initialValues={{
                  email: "",
                  nombre: "",
                  mensaje: "",
                }}
                onSubmit={(values) => handleToastClick(values)}
                validationSchema={errorEmail}
              >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                  <form className="bgAbout p-4 rounded-lg">
                    <Typography variant="h4">Formulario de contacto</Typography>
                    <hr />
                    <div className="relative z-0 w-full group">
                      <input
                        type="email"
                        id="emailId"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="emailId"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Correo electrónico
                      </label>
                    </div>
                    <small className="text-danger">
                      {errors.email && touched.email && errors.email}
                    </small>
                    <div className="relative z-0 w-full mt-4 group">
                      <input
                        type="text"
                        id="nameId"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="nameId"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Nombre y apellido
                      </label>
                    </div>
                    <small className="text-danger">
                      {errors.nombre && touched.nombre && errors.nombre}
                    </small>
                    <div className="relative z-0 w-full mt-4 group">
                      <textarea
                        data-aos="fade-left"
                        rows={3}
                        name="mensaje"
                        id="mensajeId"
                        onChange={handleChange}
                        value={values.mensaje}
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="mensajeId"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Mensaje
                      </label>
                    </div>
                    <small className="text-danger">
                      {errors.mensaje && touched.mensaje && errors.mensaje}
                    </small>
                    <div className="flex justify-center">
                      <Button
                        variant="gradient"
                        className="mt-4 w-75 flex justify-center items-center gap-1"
                        onClick={handleSubmit}
                      >
                        <EnvelopeIcon className="w-6" /> Enviar
                      </Button>
                    </div>
                  </form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
