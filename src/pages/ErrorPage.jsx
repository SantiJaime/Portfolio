// import React from 'react'

import { HomeIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container className="flex justify-center items-center flex-col my-8 gap-2">
      <Image src="/Error404.png" alt="Error 404" fluid className="rounded-full"/>
      <Link to={"/"} className="no-underline">
        <Button size="lg" variant="gradient" color="white" className="flex items-center gap-1">
          <HomeIcon className="size-5"/>
          <span>Volver a inicio</span>
        </Button>
      </Link>
    </Container>
  );
};

export default ErrorPage;
