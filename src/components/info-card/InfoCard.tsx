import "./InfoCard.scss";

import { SiDiscord, SiGithub } from "react-icons/si";
import { RiWhatsappFill, RiLinkedinFill } from "react-icons/ri";

// const style = {color: "color.$purple-50"}
const InfoCard = () => {
  return (
    <div className="info_card">
      <div className="profile_info">
        <img src="src/assets/images/profile.jpg" alt="" />
        <div>
          <h2>Pedro Lucas</h2>
          <h3>Founder</h3>
        </div>
      </div>
      <div className="info_list">
        <button>
          <a href="https://discord.gg/bSsSKy6Vtv">
            <SiDiscord className="icons" />
          </a>
          <h3>Discord Community.</h3>
        </button>
        <button>
          <a href="https://www.linkedin.com/in/pedrolucasneto/">
            <RiLinkedinFill className="icons" />
          </a>
          <h3>LinkedIn Profile.</h3>
        </button>
        <button>
          <a href="https://github.com/PedroLucasNeto">
            <SiGithub className="icons" />
          </a>
          <h3>Github Profile.</h3>
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
