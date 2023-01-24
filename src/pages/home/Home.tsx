import "./Home.scss";
import { TbArrowBigDown } from "react-icons/tb";
import project_image from "../../assets/images/project.jpg";
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
        <img src={project_image} alt="Desenvolvedor" />
        <div className="about_project">
          <div className="about_section">
            <h2>What is Coding For Free?</h2>
            <p>
              CFF is an open-source project created to help people and companies
              build their own websites totally <mark>for free</mark>.
            </p>
            <p>
              Our goal is to bring you or your company great results in the
              least amount of time possible. This is a way we found to acquire
              experience while we have not yet been exposed to the market.
            </p>
          </div>
        </div>
      </section>
      <Social />
      <Contributors />
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
