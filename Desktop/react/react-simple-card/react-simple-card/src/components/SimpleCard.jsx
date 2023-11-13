import React from "react";
import Title from "./Title";
import Description from "./Description";
import Image from "./Image";

class SimpleCard extends React.Component {
  render() {
    const { description, image, title } = this.props;
    return (
      <>
        <div className="container">
          <Image myImage={image} />
          <div className="details">
            <Title myTitle={title} />
            <Description myDescription={description} />
            <button>Cry more @ a certain fanbase</button>
          </div>
        </div>
      </>
    );
  }
}

export default SimpleCard;
