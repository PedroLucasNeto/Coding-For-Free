import { useTranslation } from "react-i18next";
import { Process } from "../../types/Process";
import styles from "./styles.module.scss";
interface ProcessCardProps {
  process: Process;
}

const ProcessCard = ({ process }: ProcessCardProps) => {
  if (!process) {
    return null;
  }

  const { title, topics } = process;

  return (
    <div className={`${styles.process_card} ${styles.grow}`}>
      <h2>{title}</h2>
      <ul>
        <li>{topics[0]}</li>
        <li>{topics[1]}</li>
      </ul>
    </div>
  );
};

export default ProcessCard;
