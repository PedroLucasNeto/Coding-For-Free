import "./SitesDeveloped.scss";
import { ISite } from "../../../../../../types";
import { TbBrandGithub, TbExternalLink, TbUser } from "react-icons/tb";
import { useTranslation } from "react-i18next";

interface SitesDevelopedProps {
  site: ISite;
}

const SitesDeveloped = ({ site }: SitesDevelopedProps) => {
  if (!site) {
    return null;
  }

  const { name, description, image, githubLink, siteLink, developedBy, stack } =
    site;
  const { t } = useTranslation();

  return (
    <div
      className="site_container"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="site_info backdrop">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <ul className="lists backdrop">
        {stack.map((stackItem, index) => (
          <li key={index}>{stackItem}</li>
        ))}
      </ul>
      <ul className="lists backdrop">
        <li>
          <a href={githubLink} target={"_blank"}>
            <TbBrandGithub />
          </a>
        </li>
        <li>
          <a href={siteLink} target={"_blank"}>
            <TbExternalLink />
          </a>
        </li>
        <li>
          <a href={siteLink} target={"_blank"}>
            <TbUser />
          </a>
        </li>
      </ul>
      <div className="developed-by backdrop">
        <p>{t("sites-section-developer-name")}</p>
        <a href={"#contributors"}>
          <p>{developedBy} </p>
        </a>
      </div>
    </div>
  );
};

export default SitesDeveloped;
