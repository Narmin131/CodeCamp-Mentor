import React, { useEffect, useState } from "react";

const TopToScroll = () => {
  const [visible, setVisible] = useState(false);

  const [open, SetOpen] = useState(false);

  const openMenu = () => {
    SetOpen(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button
        onClick={scrollTop}
        style={{
          position: "fixed",
          right: "30px",
          bottom: "30px",
          display: visible ? "block" : "none",
        }}
      >
        yuxari
      </button>
    </div>
  );
};

export default TopToScroll;
