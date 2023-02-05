import { Process } from "../../types/Process";
import "./ProcessCard.scss";

interface ProcessCardProps {
  process: Process;
}

const ProcessCard = ({ process }: ProcessCardProps) => {
  if (!process) {
    return null;
  }

  const { title, description } = process;

  return (
    <div className="process_card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProcessCard;
