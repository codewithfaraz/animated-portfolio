import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/sidebar";
const Navbar = (props) => {
  return (
    <div className="navbar">
      <Sidebar />
      <nav>
        <motion.a
          href=""
          className="logo"
          initial={({ opacity: 0 }, { scale: 0 })}
          transition={{ delay: 0.5 }}
          animate={({ opacity: 1 }, { scale: 1 })}
        >
          Lema dev
        </motion.a>
        <div className="social">
          <img src="/public/dribbble.png" alt="" />
          <img src="/public/facebook.png" alt="" />
          <img src="/public/instagram.png" alt="" />
          <img src="/public/youtube.png" alt="" />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
