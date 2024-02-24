import styles from "./styles.module.scss";

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
    <div className={styles.info_card}>
      <div className={styles.profile_info}>
        <img src={picture} alt={`${name}'s picture`} />
        <div>
          <h2>{name}</h2>
          {role ? <h3>{role}</h3> : null}
        </div>
      </div>
      <div className={styles.info_list}>
        {contactLinks.linkedin ? (
          <a href={contactLinks.linkedin} target="_blank">
            <button>
              <RiLinkedinFill className={styles.icons} />
              <h3>{t("collaborators-section-card-inProfile")}</h3>
            </button>
          </a>
        ) : null}
        {contactLinks.github ? (
          <a href={contactLinks.github} target="_blank">
            <button>
              <SiGithub className={styles.icons} />
              <h3>{t("collaborators-section-card-hubProfile")}</h3>
            </button>
          </a>
        ) : null}
        {contactLinks.email ? (
          <a href={contactLinks.email} target="_blank">
            <button>
              <MdEmail className={styles.icons} />
              <h3>Email</h3>
            </button>
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default InfoCard;
