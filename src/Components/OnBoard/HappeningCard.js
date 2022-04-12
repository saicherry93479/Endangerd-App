import React from "react";
import AuthButton from "../Auth/AuthButton";
import { HappeningCardMain } from "./HappeningCardStyle";

const HappeningCard = ({ data }) => {
  return (
    <HappeningCardMain color={data.color}>
      <div>
        <header
          style={{
            color: "black",
            fontSize: "35px",
            fontWeight: "600",
            marginBottom: "10px",
            letterSpacing: "1.1px",
          }}
        >
          {data.title}
        </header>
        <p style={{ fontSize: "14px" }}>{data.time}</p>
      </div>
      <div>
        <p style={{ color: "rgba(0,0,0,0.6)", marginBottom: "20px" }}>
          {data.happens}
        </p>
        <AuthButton
          text={"Participate"}
          color={"aliceBlue"}
          texColor={"var(--mainColor--)"}
          weight="bold"
        />
      </div>
    </HappeningCardMain>
  );
};

export default HappeningCard;
