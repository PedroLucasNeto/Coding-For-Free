import "./Home.scss";
import { TbArrowBigDown } from "react-icons/tb";

const Home = () => {
  return (
    <div className="home_container">
      <section className="home_header">
        <h1>Coding For Free</h1>
        <small>
          An open-source project to help people who are beginning a new company
        </small>
        <TbArrowBigDown className="see_more" />
      </section>
      <section className="home_project"></section>
    </div>
  );
};

export default Home;
