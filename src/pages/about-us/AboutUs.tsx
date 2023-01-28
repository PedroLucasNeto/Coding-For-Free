import "./AboutUs.scss";
import Social from "../../components/social/Social";
import { motion } from "framer-motion";

function AboutUs() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div>
      <section className="aboutUs_header">
        <h1>About Us</h1>
      </section>
      <section className="about_container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="about_box"
        >
          <motion.div variants={item}>
            <h1>Coding For Free?</h1>
            <p>
              Coding For Free is a project we developed to help people build
              their online presence by offering them free websites.
            </p>
          </motion.div>
          <motion.div variants={item}>
            <h1>How it started?</h1>
            <p>
              We wanted to do more then just portifolio we wanted to create real
              websites and get the software development cycle full experience.
              <mark>From sketch to release!</mark>
            </p>
          </motion.div>
          <motion.div variants={item}>
            <h1>Why is it free?</h1>
            <p>
              That was our goal! Thinking of that we recruited people close to
              us that needed websites and offered them our time and skills!
            </p>
          </motion.div>
          <motion.div variants={item}>
            <h1>The team</h1>
            <p>
              Harlon and Pedro, two university friends who faced the same
              problem: How to get experience without the first opportunity.
            </p>
          </motion.div>
        </motion.div>
      </section>
      <section>
        <Social />
      </section>
    </div>
  );
}

{
  /* <img
className="expImg"
src="src/assets/images/exp.png"
alt="experience initials."
/> */
}
export default AboutUs;
