import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import InfoCard from "../info-card/InfoCard";
import { collaborators } from "../../utils/collaborators";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Collaborators = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);
  const { t } = useTranslation();

  const animationSection = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.5,
      },
    },
  };
  return (
    <motion.section
      id="collaborators"
      ref={sectionRef}
      variants={animationSection}
      initial="hidden"
      animate={isInView ? "visible" : "invisible"}
      className={styles.collaborators}
    >
      <h2>{t("collaborators-section-title")} </h2>

      <div className={styles.cards_wrapper}>
        {collaborators.map((collaborator, index) => {
          const collaboratorTitle = t(
            `collaborators-section-card${index + 1}-founder`
          );
          const object = {
            name: collaborator.name,
            role: collaboratorTitle,
            picture: collaborator.picture,
            contactLinks: collaborator.contactLinks,
          };

          return <InfoCard contributor={object} />;
        })}
      </div>
    </motion.section>
  );
};

export default Collaborators;
