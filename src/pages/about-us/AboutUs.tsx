import "./AboutUs.scss";
import Social from "../../components/social/Social";
import { motion } from "framer-motion";

function AboutUs() {
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
    visible: {
      scale: 1,
      opacity: 1,
    },
  };
  return (
    <section className="aboutUs_section">
      {/* <div className="aboutUs_us_banner">
        <h1>AboutUs Us</h1>
      </div> */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="aboutUs_container"
      >
        <motion.div variants={item} className="aboutUs_card">
          <h1>Coding For Free?</h1>
          <p>
            Coding For Free is a team effort to help people build their own
            websites for free! Our goal is to empower individuals and small
            businesses to showcase their work online without breaking the bank.
          </p>
        </motion.div>
        <motion.div variants={item} className="aboutUs_card">
          <h1>The team!</h1>
          <p>
            Pedro Lucas and Harlon Garcia. Two university friends who faced the
            same problem: How to get experience without having the first
            opportunity. Join us in our mission to build meaningful, functional
            websites that make a difference!
          </p>
        </motion.div>
        <motion.div variants={item} className="aboutUs_card">
          <h1>How it started</h1>
          <p>
            We wanted to do more then just portifolio - we wanted to experience
            the full cycle of software development and give back to the
            community. We design and develop real websites for individuals and
            small businesses.
            <mark>From sketch to release!</mark>
          </p>
        </motion.div>
        <motion.div variants={item} className="aboutUs_card">
          <h1>Why is it free?</h1>
          <p>
            We wanted to make our portfolio projects come to life, that goes
            beyond just showcasing our skills. Unlike many developers who only
            create portfolio pieces, we aim to launch real websites that people
            can actually use. With this, we're not just demonstrating our
            abilities - we're helping our community and gaining valuable
            experience.
          </p>
        </motion.div>
      </motion.div>
      <Social />
    </section>
  );
}
export default AboutUs;
