import "./contact.scss";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
const variants = {
  initial: { y: 500, opacity: 0 },
  animation: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};
const Contact = (props) => {
  const [errorState, setErrorState] = useState(false);
  const [successState, setSuccessState] = useState(false);
  const ref = useRef();
  const fromRef = useRef();
  const inView = useInView(ref, { margin: "-100px" });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z6sbabr",
        "template_zw9d4pn",
        fromRef.current,
        "q8VtCaXkoZwLBwKIH"
      )
      .then(
        (result) => {
          console.log("succes");
          setSuccessState(true);
        },
        (error) => {
          console.log("fail");
          setErrorState(true);
        }
      );
  };
  return (
    <div className="contactContainer">
      <motion.div
        className="textContainer"
        variants={variants}
        initial="initial"
        whileInView="animation"
        ref={ref}
      >
        <motion.h1 variants={variants}>Let's Work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>farazmaqsood.coder@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Faisalabad, Pakistan</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+923246827267</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSVG"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={({ duration: 1 }, { delay: 3 })}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#7300ff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <motion.path
                d="M21.0001 10.9999C21.0001 6.58166 17.4184 2.99994 13.0001 2.99994M14 7.12593C15.4057 7.48768 16.5123 8.59432 16.8741 10M16.062 14.2507V14.2507C16.6052 13.5264 17.5886 13.2943 18.3983 13.6992L19.6337 14.3168C20.4404 14.7202 20.8773 15.6135 20.7004 16.4979L20.3216 18.3922C20.1346 19.3271 19.3109 20.0146 18.3636 19.9075C11.1005 19.0859 4.91414 12.8995 4.09253 5.63644C3.98537 4.68912 4.67292 3.86542 5.60777 3.67845L7.50207 3.29959C8.38646 3.12271 9.27982 3.55963 9.68316 4.36632L10.3008 5.60168C10.7057 6.41142 10.4736 7.39483 9.7493 7.93802V7.93802C9.27761 8.2918 8.99002 8.86004 9.21796 9.40381C10.0014 11.2728 12.7272 13.9986 14.5962 14.782C15.14 15.01 15.7082 14.7224 16.062 14.2507Z"
                stroke="orange"
                stroke-width="0.096"
                stroke-linecap="round"
                stroke-linejoin="round"
                initial={{ pathLength: 0 }}
                animate={inView && { pathLength: 1 }}
                transition={{ duration: 3 }}
              ></motion.path>
            </g>
          </svg>
        </motion.div>
        <motion.form
          ref={fromRef}
          onSubmit={sendEmail}
          action=""
          initial={{ opacity: 0 }}
          animate={inView && { opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <input type="text" required placeholder="Name" name="from_name" />
          <input type="text" required placeholder="Email" name="email" />
          <textarea rows="8" placeholder="Message" name="message" />
          <button onClick={sendEmail}>Submit</button>
        </motion.form>
        {errorState && "Error"}
        {successState && "success"}
      </div>
    </div>
  );
};
export default Contact;
