import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const Icon = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Your app content goes here */}
      {showScroll && (
        <div className="scroll-to-top" onClick={handleClick}>
          <FaArrowCircleUp />
        </div>
      )}
    </div>
  );
};

export default Icon;
