import "./SitesDeveloped.scss";
import { Site } from "../../types/Site";
import { TbBrandGithub, TbExternalLink, TbUser } from "react-icons/tb";
import { useTranslation } from "react-i18next";

interface SiteGridProps {
  site: Site;
}
const SiteGrid = ({ site }: SiteGridProps) => {
  if (!site) {
    return null;
  }

  const { name, description, image, githubLink, siteLink, developedBy } = site;
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
        <li>React Js</li>
        <li>Scss</li>
        <li>Framer Motion</li>
        <li>Swiper</li>
        <li>EmailJs</li>
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

export default SiteGrid;
