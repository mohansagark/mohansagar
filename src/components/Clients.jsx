import React, { useState } from "react";
import TimelineItem from "./TimelineItem";
import { TimelineData } from "../config/dataConfig";

const Clients = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="bg-body-tertiary py-5">
      <div className="container clients-section">
        <h2 className="text-center mb-5 wow fadeInUp">
          More of my credentials
        </h2>
        <section className="credential_container">
          <div className="credential_grid-container">
            {TimelineData.map((item, index) => (
              <div
                key={index}
                className="wow fadeInUp"
                data-wow-delay={`${index * 0.2}s`}
              >
                <TimelineItem
                  key={index}
                  item={item}
                  isFlipped={flippedIndex === index}
                  onFlip={() => handleFlip(index)}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Clients;
