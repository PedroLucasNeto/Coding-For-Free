import "./Home.scss";
import { TbArrowBigDown } from "react-icons/tb";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import coding_image from "/assets/images/coding.jpg";
import Social from "../../components/social/Social";
import Contributors from "../../components/contributors/Contributors";
import Process from "../../components/process/Process";
import SiteSection from "../../components/sites-section/SiteSection";

const container = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.4,
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
        <strong>Elevating online presence</strong>
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
            <motion.div variants={item}>
              <h2>About Project</h2>
              <p>
                <mark>Coding For Free</mark>
                is a way we've found to acquire experience when we haven't yet
                been exposed to the market.
              </p>
            </motion.div>
            <motion.div variants={item}>
              <h2>Task</h2>
              <p>
                Our goal was to help the people next to us to establish a strong
                online presence by creating simple but powerfull landing pages
                and with that grow as professionals.
              </p>
            </motion.div>
            <motion.div variants={item}>
              <h2>See more!</h2>
              <p>
                If you liked this idea and want to know a litle bit more about
                us
                <button>
                  <Link to={"/about"}> click here!</Link>
                </button>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Process />
      <SiteSection />
      <Contributors />
      <Social />
    </div>
  );
};

export default Home;
