import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { Button, Tooltip } from "@material-tailwind/react";
const ModalComp = ({ buttonText, img, type }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const altImg = img?.split("/")[2];
  return (
    <>
      {type === "buttonImg" ? (
        <>
          <Tooltip
            content="Agrandar imagen"
            className="bg-gray-900 text-gray-50"
          >
            <Button variant="text" className="p-0" onClick={handleShow}>
              <img src={img} alt={altImg} />
            </Button>
          </Tooltip>
          <Modal show={show} onHide={handleClose} size="xl" centered>
            <Modal.Body className="p-0">
              <img src={img} alt={altImg} />
            </Modal.Body>
          </Modal>
        </>
      ) : (
        <>
          <Button
            onClick={handleShow}
            variant="gradient"
            className="p-2 ms-2"
            disabled={buttonText === "Certificado próximamente"}
          >
            {buttonText}
          </Button>
          <Modal show={show} onHide={handleClose} size="xl" centered>
            <Modal.Body>
              <img src={img} alt={img} />
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

ModalComp.propTypes = {
  buttonText: PropTypes.string,
  img: PropTypes.string,
  type: PropTypes.string,
};

export default ModalComp;
