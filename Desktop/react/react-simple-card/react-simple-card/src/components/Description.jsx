import React from "react";

const Description = function ({ myDescription }) {
  return (
    <>
      <p className="my-description">{myDescription}</p>
      <p className="icons">
        <span className="first-icon">
          <i class="fa-brands fa-twitter"></i>
        </span>{" "}
        <span className="second-icon">
          <i class="fa-brands fa-dribbble"></i>
        </span>{" "}
        <i class="fa-brands fa-behance"></i>
      </p>
    </>
  );
};

export default Description;
