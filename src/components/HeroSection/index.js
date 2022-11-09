import React from "react";
import Play from "../../images/play.svg";
import Group from "../../images/Group 5.png";
import Apple from "../../images/apple-icon.svg";
// import ScrollAnimation from "react-animate-on-scroll";
import {
  HeroComponent,
  HeroContent,
  HeroText,
  HeroBtn,
  HeroBtnLink,
  HeroBtnLink1,
  HeroImg,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroComponent
      
      id="home"
    >
      <HeroContent>
        <HeroText>
          <h1>The Better Way to Save & Invest.</h1>
          <p>
            PiggyVest helps over 4 million customers achieve their financial
            goals by helping them save and invest with ease.
          </p>
          <HeroBtn>
            <HeroBtnLink to="/account">Create free account</HeroBtnLink>
          </HeroBtn>
          <HeroBtn>
            <HeroBtnLink1 to="/iphone">
              <img src={Apple} alt="apple" />
              Get on iPhone
            </HeroBtnLink1>
            <HeroBtnLink1 to="/android">
              <img src={Play} alt="play" />
              Get on Android
            </HeroBtnLink1>
          </HeroBtn>
        </HeroText>
        <HeroImg>
          <img src={Group} alt="group" />
        </HeroImg>
      </HeroContent>
    </HeroComponent>
  );
};

export default HeroSection;
