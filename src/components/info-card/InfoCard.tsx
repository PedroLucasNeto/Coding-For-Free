import "./InfoCard.scss";

import { SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { RiLinkedinFill } from "react-icons/ri";
import { Contributor } from "../../types/Contributor";

interface InfoCardProps {
  contributor: Contributor;
}

const InfoCard = ({ contributor }: InfoCardProps) => {
  if (!contributor) {
    return null;
  }

  const { name, role, picture, contactLinks } = contributor;

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
          <button>
            <a href={contactLinks.linkedin}>
              <RiLinkedinFill className="icons" />
            </a>
            <h3>LinkedIn Profile</h3>
          </button>
        ) : null}
        {contactLinks.github ? (
          <button>
            <a href={contactLinks.github}>
              <SiGithub className="icons" />
            </a>
            <h3>Github Profile</h3>
          </button>
        ) : null}
        {contactLinks.email ? (
          <button>
            <a href={contactLinks.email}>
              <MdEmail className="icons" />
            </a>
            <h3>Email</h3>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default InfoCard;
