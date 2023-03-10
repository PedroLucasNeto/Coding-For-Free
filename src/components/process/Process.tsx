import "./Process.scss";

import { processes } from "../../utils/processes";
import ProcessCard from "../process-card/ProcessCard";
import { useTranslation } from "react-i18next";

const Process = () => {
  const { t } = useTranslation();
  return (
    <section className="process_section">
      <h2>{t("process-section-title")}</h2>
      {processes.map((process, index) => {
        const title = t(`process-section-card${index + 1}-title`);
        const description1 = t(`process-section-card${index + 1}-description1`);
        const description2 = t(`process-section-card${index + 1}-description2`);

        const object = {
          title,
          topics: [description1, description2],
          image: process.image,
        };
        return (
          <div
            key={index}
            id="cards_container"
            className={
              index % 2 == 0 ? "cards_container" : "cards_container row_reverse"
            }
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
