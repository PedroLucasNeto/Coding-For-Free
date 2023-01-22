import "./Social.scss";
import { SiDiscord, SiGithub } from "react-icons/si";
import { RiWhatsappFill, RiLinkedinFill } from "react-icons/ri";

const social_links = [
  { icon: <SiDiscord />, title: "Discord", url: "" },
  { icon: <SiGithub />, title: "Github", url: "" },
  { icon: <RiLinkedinFill />, title: "Linkedin", url: "" },
  { icon: <RiWhatsappFill />, title: "Whatsapp", url: "" },
];

const Social = () => {
  return (
    <section className="social">
      <h1>
        Follow us on <mark>social media</mark>
      </h1>
      <div className="social_icons">
        {social_links.map(({ icon, title, url }, index) => (
          <div key={index + title} className="social_buttons">
            <button style={{ left: "-" + index * 12 + "px" }}>
              <a href={url}>{icon}</a>
              <span></span>
            </button>

            <small>{title}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Social;
