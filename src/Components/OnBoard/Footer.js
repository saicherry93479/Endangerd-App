import React from "react";
import "./FooterStyles.css";
import {
  FooterCustomText,
  FooterDataDiv,
  FooterDataSubTitle,
  FooterHeaderDiv,
  FooterHeaderDivHeader,
  FooterMain,
} from "./FooterStyle";

const FooterData = [
  {
    header: "COMMUNITY",
    subTitles: ["Organize Event", "Explore Events", "Donate"],
  },
  {
    header: "COMPANY",
    subTitles: ["About", "Blog", "Privacy", "Terms", "Contact"],
  },
  {
    header: "SUPPORT",
    subTitles: ["Help", "Status", "Provide", "Contact Us"],
  },
];
const Footer = () => {
  return (
    <FooterMain>
      <FooterHeaderDiv>
        <FooterHeaderDivHeader>
          we love care
          <FooterCustomText color="var(--mainColor--)">
            {" "}
            save
          </FooterCustomText>{" "}
          and we help the
          <FooterCustomText color="tomato">
            {" "}
            EnDangerd Animals{" "}
          </FooterCustomText>
          around the world
        </FooterHeaderDivHeader>
        <div className="socialIcons">
          <i class="fa-brands fa-discord"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>

          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-facebook"></i>
        </div>
      </FooterHeaderDiv>

      {FooterData.map((data, index) => (
        <FooterDataDiv key={index}>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(0,0,0,0.5)",
              fontWeight: "bold",
              letterSpacing: "1.2px",
            }}
          >
            {data.header}
          </p>
          {data.subTitles.map((dataI, keyI) => (
            <FooterDataSubTitle key={keyI}>{dataI}</FooterDataSubTitle>
          ))}
        </FooterDataDiv>
      ))}
    </FooterMain>
  );
};

export default Footer;
