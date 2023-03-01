import "./InfoCard.scss";

import { SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { RiLinkedinFill } from "react-icons/ri";
import { Contributor } from "../../types/Contributor";
import { useTranslation } from "react-i18next";

interface InfoCardProps {
  contributor: Contributor;
}

const InfoCard = ({ contributor }: InfoCardProps) => {
  if (!contributor) {
    return null;
  }

  const { name, role, picture, contactLinks } = contributor;

  const { t } = useTranslation();
  return (
    <div className="info_card">
      <div className="profile_info">
        <img src={picture} alt={`${name}'s picture`} />
        <div>
          <h2>{name}</h2>
          {role ? <h3>{role}</h3> : null}
        </div>
      </div>
      <div className="info_list">
        {contactLinks.linkedin ? (
          <a href={contactLinks.linkedin} target="_blank">
            <button>
              <RiLinkedinFill className="icons" />
              <h3>{t("contributors-section-card-inProfile")}</h3>
            </button>
          </a>
        ) : null}
        {contactLinks.github ? (
          <a href={contactLinks.github} target="_blank">
            <button>
              <SiGithub className="icons" />
              <h3>{t("contributors-section-card-hubProfile")}</h3>
            </button>
          </a>
        ) : null}
        {contactLinks.email ? (
          <a href={contactLinks.email} target="_blank">
            <button>
              <MdEmail className="icons" />
              <h3>Email</h3>
            </button>
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default InfoCard;
