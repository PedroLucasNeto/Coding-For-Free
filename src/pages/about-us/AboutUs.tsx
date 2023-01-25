import "./AboutUs.scss";
import gif from "../../assets/images/contributors_pictures/gifCoding.gif";
function AboutUs() {
  return (
    <section className="about_container">
      <div className="about_box">
        <div className="text_box">
          <h1>About Us</h1>
          <p>
            We are Harlon and Pedro, two Information Systems' studens. Our
            journey together started at the university and we both faced the
            same problem how to get experience in software development. But as
            good developers should do, we found a solution, lets offer free REAL
            websites for people, this way we can develop our skills and acquire
            experience.
          </p>
        </div>
        <img src={gif} alt="gif de pessoas codando" />
      </div>
    </section>
  );
}

export default AboutUs;
