import React, { useState, useEffect } from "react";

const TimelineItem = ({ className, item, isFlipped, onFlip }) => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth <= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    if (isMobileOrTablet) {
      onFlip();
    }
  };

  const handleMouseEnter = () => {
    if (!isMobileOrTablet) {
      onFlip();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobileOrTablet) {
      onFlip();
    }
  };

  return (
    <div
      className={`credential_tile ${isFlipped ? "flipped" : ""} ${className}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="credential_front">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="credential_back bg-primary">
        <h5>{item.title}</h5>
        <p>
          <strong>{item.role}</strong>
        </p>
        <p>{item.duration}</p>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
