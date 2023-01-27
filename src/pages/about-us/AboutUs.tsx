import "./AboutUs.scss";
import Social from "../../components/social/Social";
import gif from "../../assets/images/contributors_pictures/gifCoding.gif";

function AboutUs() {
  return (
    <div>
      <section className="about_container">
        <div className="about_box">
          <div className="text_box">
            <h1>About Us</h1>
            <p>
              We are Harlon and Pedro, two Information Systems' studens. Our
              journey together started at the university and we both faced the
              same problem: How to get our first opportunitie in software
              development without having experience? But as good developers
              should do, we found a solution!
            </p>
            <p>
              To solve this problem we created <mark>Coding For Free</mark>
              which was a way of helping people build their online presence
              while we're facing all the software development cycle's problems.
            </p>
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
