import { Process } from "../../types/Process";
import "./ProcessCard.scss";

interface ProcessCardProps {
  process: Process;
}

const ProcessCard = ({ process }: ProcessCardProps) => {
  if (!process) {
    return null;
  }

  const { title, topics } = process;

  return (
    <div className="process_card grow">
      <h2>{title}</h2>
      <ul>
        <li>{topics[0]}</li>
        <li>{topics[1]}</li>
      </ul>
    </div>
  );
};

export default ProcessCard;
