import "./Home.scss";
import { TbArrowBigDown } from "react-icons/tb";
import coding_image from "../../assets/images/coding.jpg";
import Social from "../../components/social/Social";
import Contributors from "../../components/contributors/Contributors";

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
          <div className="about_section">
            <h2>About Project</h2>
            <p>
              <mark>Coding For Free</mark>
              is a way we found to acquire experience while we have not yet been
              exposed to the market.
            </p>
            <h2>Task</h2>
            <p>
              Our goal is to help you or your company to establish a strong
              online presence by creating simple but powerfull landing pages.
            </p>
            <h2>Get your own website!</h2>
            <p>
              If you're starting a new business or have an idea that needs to be
              shown to the worldyou can get your landing page
              <mark>for free</mark>
            </p>
          </div>
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
