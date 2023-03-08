import "./TopButton.scss";
import { TbArrowBigTop } from "react-icons/tb";
import { useState } from "react";

const TopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [leftHome, setLeftHome] = useState(false);

  const handleAppear = () => {
    setScrollPosition(window.scrollY);
    if (scrollPosition > 300) {
      setLeftHome(true);
    } else {
      setLeftHome(false);
    }
  };

  window.addEventListener("scroll", handleAppear);
  return (
    <div className={leftHome ? "top_button_div" : ""}>
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="top_button"
      >
        <TbArrowBigTop />
      </button>
    </div>
  );
};

export default TopButton;
