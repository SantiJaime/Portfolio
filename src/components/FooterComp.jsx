import { Container } from "react-bootstrap";

const FooterComp = () => {
  return (
    <Container fluid className="footerColor py-2">
      <div className="flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/santiago-agustín-jaime-a04b53296/"
          target="_blank"
          className="fs-1 text-gray-50 hover:text-blue-900 transition-all"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://github.com/SantiJaime"
          target="_blank"
          className="fs-1 text-gray-50 hover:text-gray-500 transition-all"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
          className="fs-1 text-gray-50 hover:text-blue-gray-500 transition-all"
        >
          <i className="bi bi-envelope-at-fill"></i>
        </a>
      </div>
    </Container>
  );
};

export default FooterComp;
