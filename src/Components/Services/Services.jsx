import "./services.scss";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Services = (props) => {
  const ref = useRef();
  const inView = useInView(ref, { margin: "-100px" });
  const variants = {
    initial: { x: -500, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.5 },
    },
  };
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate={inView && "animate"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focused on helping your brand <br />
          growing and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="upperTitle">
          <img src="/public/people.webp" alt="" />
          <h1>
            <span>Unique</span> Ideaa
          </h1>
        </div>
        <div className="lowerTitle">
          <h1>
            <span>For Your </span>Business.
          </h1>
          <button>What we do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <div className="box">
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
            repellat. Sint non fugit aliquam, laboriosam libero deleniti natus
            dolor dolorem neque dignissimos! Commodi unde quam quos fuga
            reprehenderit, asperiores voluptas saepe quidem quod doloremque
            praesentium assumenda sit tempore eveniet, non cumque dolores
            corporis recusandae fugit. Nemo nesciunt voluptates iure sit?
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
            repellat. Sint non fugit aliquam, laboriosam libero deleniti natus
            dolor dolorem neque dignissimos! Commodi unde quam quos fuga
            reprehenderit, asperiores voluptas saepe quidem quod doloremque
            praesentium assumenda sit tempore eveniet, non cumque dolores
            corporis recusandae fugit. Nemo nesciunt voluptates iure sit?
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
            repellat. Sint non fugit aliquam, laboriosam libero deleniti natus
            dolor dolorem neque dignissimos! Commodi unde quam quos fuga
            reprehenderit, asperiores voluptas saepe quidem quod doloremque
            praesentium assumenda sit tempore eveniet, non cumque dolores
            corporis recusandae fugit. Nemo nesciunt voluptates iure sit?
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
            repellat. Sint non fugit aliquam, laboriosam libero deleniti natus
            dolor dolorem neque dignissimos! Commodi unde quam quos fuga
            reprehenderit, asperiores voluptas saepe quidem quod doloremque
            praesentium assumenda sit tempore eveniet, non cumque dolores
            corporis recusandae fugit. Nemo nesciunt voluptates iure sit?
          </p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Services;
