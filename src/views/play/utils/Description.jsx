import React from "react";
import Text from "../../../components/text/Text";
import { defaultDescription } from "../../../utils/dummyData";

const Description = ({ description, coinImage }) => {
  // const backgroundImage = coinImage ? coinImage : bgImage;
  return (
    <div
      className="description-container px-5 py-2 mt-2  "
      style={{
        position: "relative", // Ensures the positioning context for the pseudo-element
        // padding: "inherit",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      {/* Content */}
      <div className="content px-2 md:px-5 ">
        <Text className="text-sm  text-text-light font-bold mb-2">
          Description
        </Text>
        <Text className="text-[rgb(107,114,128)] text-sm leading-loose break-words ">
          {description || defaultDescription}
        </Text>
      </div>
    </div>
  );
};

export default Description;
