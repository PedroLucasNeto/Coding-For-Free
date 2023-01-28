import "./AboutUs.scss";
import Social from "../../components/social/Social";
import gif from "../../assets/images/contributors_pictures/gifCoding.gif";
import InfoCard from "../../components/info-card/InfoCard";

function AboutUs() {
  return (
    <div>
      <section></section>
      <section className="about_container">
        <div className="about_box">
          <div className="text_box">
            <div>
              <h1>What is Coding For Free </h1>
              <p>
                Coding For Free is a project we developed to help people build
                their online presence by offering them free websites.
              </p>
            </div>
            <div>
              <h1>How it started?</h1>
              <p>
                We wanted to do more then just portifolio we wanted to create
                real websites and get the full experience of a software
                development cycle. From the sketch to the release!
              </p>
            </div>
            <div>
              <h1>Why is it free?</h1>
              <p>
                <img
                  className="expImg"
                  src="src/assets/images/exp.png"
                  alt="experience initials."
                />
                That was our goal! Thinking of that we recruited people next to
                us that needed a website and offered them our time and skills!
              </p>
            </div>
            <div>
              <h1>The team</h1>
              <p>Harlon and Pedro</p>
            </div>
          </div>

          <img src={gif} alt="gif de pessoas codando" />
        </div>
      </section>
      <section>
        <Social />
      </section>
    </div>
  );
}

export default AboutUs;
