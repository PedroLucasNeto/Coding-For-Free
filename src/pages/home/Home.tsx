import "./Home.scss";
import { TbArrowBigDown } from "react-icons/tb";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
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
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const Home = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef);

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
            ref={aboutRef}
            className="about_section"
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "invisible"}
          >
            <motion.div>
              <h2>About Project</h2>
              <p>
                <mark>Coding For Free</mark>
                is a way we found to acquire experience while we have not yet
                been exposed to the market.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2>Task</h2>
              <p>
                Our goal is to help you or your company to establish a strong
                online presence by creating simple but powerfull landing pages.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2>What's your needs?</h2>
              <p>
                If you're starting a new business or have an idea that needs to
                be shown to the world you can get your landing page
                <mark>for free</mark>
              </p>
            </motion.div>
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
