import "./TopButton.scss";
import { TbArrowBigTop } from "react-icons/tb";
import { useState } from "react";

const TopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [leftHome, setLeftHome] = useState(false);

  const handleIsButtonVisible = () => {
    setScrollPosition(window.scrollY);
    setLeftHome(scrollPosition > 300);
  };

  window.addEventListener("scroll", handleIsButtonVisible);

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
