import React, { useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(top > 50);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`back-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
        <ArrowUpwardIcon></ArrowUpwardIcon>
    </button>
  );
}

export default BackToTopButton;