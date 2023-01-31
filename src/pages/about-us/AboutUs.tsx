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
    <div className="first_container">
      <section className="about_us_header">
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
            <h1>The team!</h1>
            <p>
              Harlon and Pedro. Two university friends who faced the same
              problem: How to get experience without having the first
              opportunity.
            </p>
          </motion.div>
          <motion.div variants={item}>
            <h1>How it started?</h1>
            <p>
              We wanted to do more then just portifolio we'd like get the
              experience of full cycle software development. With Coding For
              Free we create real websites.
              <mark>From sketch to release!</mark>
            </p>
          </motion.div>
          <motion.div variants={item}>
            <h1>Why is it free?</h1>
            <p>
              Because we needed experience and weren't experienced enough to
              charge. With that in mind we recruited some people close to us
              that needed websites and offered them our time and skills!
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
