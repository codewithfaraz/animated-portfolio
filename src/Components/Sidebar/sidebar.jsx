import { useState } from "react";
import "./sidebar.scss";
import { motion } from "framer-motion";
const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1440px at 50px 50px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 40,
        damping: 10,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: { delay: 0.1 },
    },
  };
  const change = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  const items = ["Home Page", "About"];
  return (
    <>
      {isOpen && <div className="layout" onClick={change}></div>}
      <motion.div className="sidebar" animate={isOpen ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
          <ul className="list">
            <motion.a
              href="#home"
              whileHover={{ transform: "translateX(10px)" }}
            >
              <li className="link">Home</li>
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ transform: "translateX(10px)" }}
            >
              <li className="link">Services</li>
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ transform: "translateX(10px)" }}
            >
              <li className="link">Portfolio</li>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ transform: "translateX(10px)" }}
            >
              <li className="link">Contact</li>
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ transform: "translateX(10px)" }}
            >
              <li className="link">About</li>
            </motion.a>
          </ul>
        </motion.div>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <svg width="23" height="23" viewBox="0 0 23 23">
            <motion.path
              strokeWidth="3"
              stroke="black"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <motion.path
              strokeWidth="3"
              stroke="black"
              strokeLinecap="round"
              d="M 2 9.423 L 20 9.423"
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
            />
            <motion.path
              strokeWidth="3"
              stroke="black"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
      </motion.div>
    </>
  );
};

export default Sidebar;
