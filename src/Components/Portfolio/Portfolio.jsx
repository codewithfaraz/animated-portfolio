import "./portfolio.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const items = [
  {
    id: 0,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, eaerror autem hic accusantium explicabo corporis velit. Placeat fugapariatur ullam eum nostrum architecto aliquam ipsam, consequatur incidunt,iure ab voluptates nisi inventore. Rem recusandae repudiandae dolorem.Blanditiis, explicabo optio perferendis",
  },
  {
    id: 1,
    title: "React Commrece",
    img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, eaerror autem hic accusantium explicabo corporis velit. Placeat fugapariatur ullam eum nostrum architecto aliquam ipsam, consequatur incidunt,iure ab voluptates nisi inventore. Rem recusandae repudiandae dolorem.Blanditiis, explicabo optio perferendis",
  },
  {
    id: 2,
    title: "React Portfolio",
    img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, eaerror autem hic accusantium explicabo corporis velit. Placeat fugapariatur ullam eum nostrum architecto aliquam ipsam, consequatur incidunt,iure ab voluptates nisi inventore. Rem recusandae repudiandae dolorem.Blanditiis, explicabo optio perferendis",
  },
];
const SingleSection = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1 className="heading">Featurd Work</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX: scrollY }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <SingleSection key={item.id} item={item} />
      ))}
    </div>
  );
};
export default Portfolio;
