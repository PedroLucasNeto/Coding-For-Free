import "./Home.scss";
import { TbArrowBigDown } from "react-icons/tb";
import project_image from "../../assets/images/project.jpg";

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
            <h2>Who are we?</h2>
            <p>
              We are Information Systems students at Unifacisa, Campina Grande,
              Paraiba, Brazil.
            </p>
          </div>
          <div className="about_section">
            <h2>What is Coding For Free?</h2>
            <p>
              CFF is an open-source project to help people who are beginning a
              new company
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
