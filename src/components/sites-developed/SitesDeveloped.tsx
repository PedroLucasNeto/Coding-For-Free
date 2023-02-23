import "./SitesDeveloped.scss";
import { Site } from "../../types/Site";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";

interface SiteGridProps {
  site: Site;
}
const SiteGrid = ({ site }: SiteGridProps) => {
  if (!site) {
    return null;
  }

  const { name, description, images } = site;
  return (
    <div
      className="site_container"
      style={{
        backgroundImage: `url(${images.banner})`,
      }}
    >
      <div className="site_info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <ul className="lists">
        <li>React Js</li>
        <li>Scss</li>
        <li>Framer Motion</li>
        <li>Swiper</li>
        <li>EmailJs</li>
      </ul>
      <ul className="lists">
        <li>
          <a
            href="https://github.com/PedroLucasNeto/Forzam-Detail"
            target={"_blank"}
          >
            <TbBrandGithub />
          </a>
        </li>
        <li>
          <a href="https://forzamdetail.netlify.app/" target={"_blank"}>
            <TbExternalLink />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SiteGrid;
