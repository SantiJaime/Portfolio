import { Container, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import "../css/WaveText.css";

const LoadingScreen = () => {
  const letters = "SantiJaime".split("");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <Container
      fluid
      className="flex flex-col justify-center items-center vh-100 bgNav gap-4"
    >
      <motion.div
        className="wave-text-container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            className="font-bold fuenteLetra"
            initial={{ color: '#505154' }}
            animate={{ color: '#ffffff' }}
            transition={{ duration: 3, delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
      <Spinner animation="grow" variant="light" />
    </Container>
  );
};

export default LoadingScreen;
