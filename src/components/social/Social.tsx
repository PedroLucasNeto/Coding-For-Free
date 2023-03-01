import "./Social.scss";
import { SiDiscord, SiGithub } from "react-icons/si";
import { RiWhatsappFill, RiLinkedinFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const social_links = [
  {
    icon: <SiDiscord />,
    title: "Discord",
    url: "https://discord.gg/PW4MYGfxY8",
  },
  {
    icon: <SiGithub />,
    title: "Github",
    url: "https://github.com/PedroLucasNeto/Coding-For-Free",
  },
];

const Social = () => {
  const { t } = useTranslation();
  return (
    <section className="social">
      <h2>
        {t("social-media-section-text")}{" "}
        <mark>{t("social-media-section-mark")}</mark>
      </h2>
      <div className="social_icons">
        {social_links.map(({ icon, title, url }, index) => (
          <div key={index + title} className="social_buttons">
            <button style={{ left: "-" + index * 12 + "px" }}>
              <a href={url} target="_blank">
                {icon}
              </a>
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
