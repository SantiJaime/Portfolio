import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import { Col, Row } from "react-bootstrap";
import ModalComp from "./ModalComp";
import { DATA } from "../constants/const";

const TabsComp = () => {
  const [active, setActive] = useState("/proyectos/Chevronar1.png");
  const [activeTab, setActiveTab] = useState("Chevronar");

  const tabChange = (value) => {
    setActiveTab(value);

    if (value === "Chevronar") setActive("/proyectos/Chevronar1.png");
    else if (value === "Juani Car Detailing")
      setActive("/proyectos/JuaniDetailing1.png");
  };

  return (
    <div className="my-5 w-full" data-aos="zoom-in-up">
      <Typography variant="h1" className="text-center w-full text-gray-50 mb-4">
        Mis proyectos
      </Typography>
      <Tabs value={activeTab}>
        <TabsHeader
          className="text-gray-900 rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {DATA.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => tabChange(value)}
              className={activeTab === value ? "text-gray-50" : "text-gray-400"}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          <Row>
            {DATA.map(({ value, desc, img, link }) => (
              <Col key={value} sm={12}>
                <TabPanel value={value}>
                  <div className="p-3 rounded-lg">
                    <Row>
                      <Col lg={6} sm={12} className="mt-2">
                        <div data-aos="fade-up" data-aos-duration="3000">
                          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl text-center">
                            {value}
                          </h2>
                          <p className="mt-4 text-gray-300 text-justify">
                            {desc}
                          </p>
                          <div className="text-center mt-4">
                            <a
                              href={link}
                              target="_blank"
                              className="text-white no-underline mb-5 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 transition-all"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 me-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                                />
                              </svg>
                              Visita la página aquí
                            </a>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} sm={12}>
                        <div className="grid gap-4 bgAbout p-3 rounded-lg">
                          <div data-aos="zoom-in-left">
                            <ModalComp type={"buttonImg"} img={active} />
                          </div>
                          <div
                            data-aos="zoom-out"
                            className="grid grid-cols-3 gap-2"
                          >
                            {img.map((image, index) => (
                              <img
                                onClick={() => setActive(image)}
                                src={image}
                                className="w-full cursor-pointer rounded-lg sombra transition-all object-contain lg:object-cover object-center "
                                alt={image.split("/")[2]}
                                key={index}
                              />
                            ))}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </TabPanel>
              </Col>
            ))}
          </Row>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default TabsComp;
