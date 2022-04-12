import React from "react";
import {
  HeroCustomCircle,
  HeroInput,
  HeroMain,
  HeroPara,
  HeroParaSpan,
  HeroSecond,
  HeroSecondDiv,
} from "./HeroStyle";

const Hero = () => {
  return (
    <HeroMain>
      <HeroPara>
        We are protectors of
        <HeroParaSpan color="main"> EnDangerd </HeroParaSpan> species spread
        across <HeroParaSpan> world*</HeroParaSpan>
      </HeroPara>
      <HeroSecond>
        <HeroParaSpan bg={true}>Join us</HeroParaSpan>
        <HeroSecondDiv>
          <HeroInput type={'email'}></HeroInput>
          <HeroCustomCircle>
            <i class="fa-solid fa-arrow-right"></i>
          </HeroCustomCircle>
        </HeroSecondDiv>
      </HeroSecond>
    </HeroMain>
  );
};

export default Hero;
