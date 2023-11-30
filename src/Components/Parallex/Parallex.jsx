import "./parallex.scss";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
const Parallex = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const YText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const XStarts = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      ref={ref}
      className="parallex"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #0c0c1d, #111132)"
            : "linear-gradient(180deg, #111132, #0c0c1d)",
      }}
    >
      <motion.h1 style={{ y: YText }}>
        {type === "services" ? "What we do?" : "What we done?"}
      </motion.h1>
      <div className="mountains"></div>
      <motion.div className="stars" style={{ x: XStarts }}></motion.div>
      <motion.div
        className="sun"
        style={
          ({ y: XStarts },
          {
            background:
              type === "services"
                ? "url(/public/planets.png)"
                : "url(/public/sun.png)",
          })
        }
      ></motion.div>
    </div>
  );
};
export default Parallex;
