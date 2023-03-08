import "./TopButton.scss";
import { TbArrowBigTop } from "react-icons/tb";
import { useState } from "react";

const TopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [leftHome, setLeftHome] = useState(false);

  const handleAppear = () => {
    console.log(leftHome);
    console.log(scrollPosition);
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
      <a href="#home" className="top_button">
        <TbArrowBigTop />
      </a>
    </div>
  );
};

export default TopButton;
