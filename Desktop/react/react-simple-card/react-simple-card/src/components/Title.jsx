import React from "react";

const Title = function ({ myTitle }) {
  return (
    <>
      <h3>
        {myTitle} <span className="head">The name is </span>
      </h3>
      <h1>Lionel Messi</h1>
      <p>
        <span className="iam-text">INFINITY</span>{" "}
        <span className="developer-text">GOATED</span>
      </p>
    </>
  );
};

export default Title;
