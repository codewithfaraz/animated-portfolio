import "./hero.scss";
import { motion } from "framer-motion";
const Hero = () => {
  const variants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const textVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        duration: 20,
        repeatType: "mirror",
        repeat: Infinity,
      },
    },
  };
  return (
    <motion.div className="hero" initial="initial" animate="animate">
      <motion.div className="wrapper" variants={variants}>
        <div className="content">
          <h2>FARAZ MAQSOOD</h2>
          <h1>Front End Web Developer</h1>
          <div className="buttons">
            <button className="workBtn">See my work</button>
            <button className="contactBtn">Contact</button>
          </div>
          <div className="scrollImg">
            <motion.img
              src="/public/scroll.png"
              alt=""
              variants={variants}
              animate="scrollButton"
            />
          </div>
        </div>
        <div className="img">
          <img src="/public/hero.png" alt="" />
        </div>
      </motion.div>
      <motion.div
        className="animatedText"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        Front End Developer
      </motion.div>
    </motion.div>
  );
};
export default Hero;
