import "./Contributors.scss";
import InfoCard from "../info-card/InfoCard";
import { contributors } from "../../utils/contributors";

const Contributors = () => {
  return (
    <section className="contributors">
      {contributors.map((contributor, index) => (
        <InfoCard key={index + contributor.name} contributor={contributor} />
      ))}
    </section>
  );
};

export default Contributors;
