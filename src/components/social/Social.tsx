import "./Social.scss";
import { SiDiscord, SiGithub } from "react-icons/si";
import { RiWhatsappFill, RiLinkedinFill } from "react-icons/ri";

const social_links = [
  {
    icon: <SiDiscord />,
    title: "Discord",
    url: "https://discord.gg/7vCgtjdanC",
  },
  { icon: <SiGithub />, title: "Github", url: "github.com" },
  { icon: <RiLinkedinFill />, title: "Linkedin", url: "" },
];

const Social = () => {
  return (
    <section className="social">
      <h2>
        Follow us on <mark>social media</mark>
      </h2>
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
