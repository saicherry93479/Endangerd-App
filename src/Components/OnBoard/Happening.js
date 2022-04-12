import React from "react";
import HappeningCard from "./HappeningCard";
import { HappeningM, HappeningMain } from "./HappeningStyle";

const HappeningCardsData = [
  {
    color: "#ebc034",
    title: "Summit Save",
    time: "8th April,2022",
    happens: "Happening Online",
  },
  {
    color: "#34eb9b",
    title: "National Animals Welfare Event",
    time: "9th April,2022",
    happens: "Happening Online",
  },
  {
    color: "#eb3483",
    title: "NYCS Meet",
    time: "9th April,2022",
    happens: "Venue L.B Nagr,Hyderbad",
  },
];
const Happening = () => {
  return (
    <HappeningM>
      <p
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          textAlign: "center",
          color: "black",
          marginBottom: "20px",
        }}
      >
        Events Happening now
      </p>
      <HappeningMain>
        {HappeningCardsData.map((data, index) => (
          <HappeningCard key={index} data={data} />
        ))}
      </HappeningMain>

      {/* TODO:-- Link to the explore after completion  */}
      <p
        style={{
          color: "var(--mainColor--)",
          textAlign: "center",
          textDecoration: "underline",
          fontSize: "16px",
          fontWeight: "800",
          cursor: "pointer",
        }}
      >
        see all
      </p>
    </HappeningM>
  );
};

export default Happening;
