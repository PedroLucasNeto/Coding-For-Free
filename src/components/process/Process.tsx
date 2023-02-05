import "./Process.scss";

import { processes } from "../../utils/processes";
import ProcessCard from "../process-card/ProcessCard";

const Process = () => {
  return (
    <section className="process_section">
      <h2>The Process</h2>
      {processes.map((process, index) => {
        {
          return (
            <div
              key={index}
              id="cards_container"
              className={
                index % 2 == 0
                  ? "cards_container"
                  : "cards_container row_reverse"
              }
            >
              <img src={process.image} alt="Ilustrative image of each action" />
              <ProcessCard key={index} process={process} />
            </div>
          );
        }
      })}
    </section>
  );
};

export default Process;
