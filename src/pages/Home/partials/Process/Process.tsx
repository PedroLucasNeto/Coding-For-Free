import { processes } from "../../../../utils/data";
import ProcessCard from "../../../../components/ProcessCard/ProcessCard";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const Process = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.process_section}>
      <h2>{t("process-section-title")}</h2>
      {processes.map((process, index) => {
        const title = t(`process-section-card${index + 1}-title`);
        const firstDescription = t(`process-section-card${index + 1}-description1`);
        const secondDescription = t(`process-section-card${index + 1}-description2`);

        const object = {
          title,
          topics: [firstDescription, secondDescription],
          image: process.image,
        };

        return (
          <div
            key={index}
            id="cards_container"
            className={`
              ${styles.cards_container}
              ${index % 2 === 0 && styles.row_reverse}
            `}
          >
            <img src={process.image} alt="Ilustrative image of each action" />
            <ProcessCard key={index} process={object} />
          </div>
        );
      })}
    </section>
  );
};

export default Process;
