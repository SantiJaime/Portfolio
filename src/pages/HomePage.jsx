import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TabsComp from "../components/TabsComp";
import ContactComp from "../components/ContactComp";
import CarouselComp from "../components/CarouselComp";
import AboutMeComp from "../components/AboutMeComp";

const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <section id="sobremi" className="text-gray-50 my-5">
        <AboutMeComp />
      </section>
      <section id="proyectos">
        <TabsComp />
        <CarouselComp />
      </section>
      <section id="contacto">
        <ContactComp />
      </section>
    </>
  );
};

export default HomePage;
