import "./Home.scss";
import { TbArrowBigDown } from "react-icons/tb";
import { motion } from "framer-motion";
import coding_image from "../../assets/images/coding.jpg";
import Social from "../../components/social/Social";
import Contributors from "../../components/contributors/Contributors";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const Home = () => {
  return (
    <div className="home_container">
      <section className="home_header">
        <h1>Coding For Free</h1>
        <strong>Elevating your online presence</strong>
        <TbArrowBigDown className="see_more" />
      </section>
      <section className="home_project">
        <img src={coding_image} alt="Desenvolvedor" />
        <div className="about_project">
          <motion.div
            className="about_section"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={item}>About Project</motion.h2>
            <motion.p variants={item}>
              <mark>Coding For Free</mark>
              is a way we found to acquire experience while we have not yet been
              exposed to the market.
            </motion.p>
            <motion.h2 variants={item}>Task</motion.h2>
            <motion.p variants={item}>
              Our goal is to help you or your company to establish a strong
              online presence by creating simple but powerfull landing pages.
            </motion.p>
            <motion.h2 variants={item}>Get your own website!</motion.h2>
            <motion.p variants={item}>
              If you're starting a new business or have an idea that needs to be
              shown to the worldyou can get your landing page
              <mark>for free</mark>
            </motion.p>
          </motion.div>
        </div>
      </section>
      <Contributors />
      <Social />
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          rerum itaque ducimus voluptatibus qui nobis. Porro vero odio
          exercitationem, quibusdam veritatis aliquid, adipisci maxime
          necessitatibus mollitia nulla, dolores omnis voluptatem.
        </p>
      </div>
    </div>
  );
};

export default Home;
