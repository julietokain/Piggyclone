import React from "react";
import Twitter from "../../images/twitter.svg";
import Facebook from "../../images/facebook.svg";
import Instagram from "../../images/instagram.svg";
import Logo from "../../images/logo.svg";
import Compliance from "../../images/compliance.jpeg";
import {
  FooterComponent,
  FooterRow,
  FooterImg,
  FooterIcon,
  IconContainer,
  FooterText,
  FooterList,
} from "./FooterElements";

export const FooterSection = () => {
  return (
    <FooterComponent>
      <FooterRow>
        <FooterImg>
          <img id="logo" src={Logo} alt="logo" />
          <img className="compliance" src={Compliance} alt="compliance" />
        </FooterImg>
        <FooterList>
          <ul>
            <li className="heading">Products</li>
            <li className="link" to="/piggybank">
              Piggybank
            </li>
            <li className="link" to="/invest">
              Invest
            </li>
            <li className="link" to="/safelock">
              Safelock
            </li>
            <li className="link" to="/target">
              Target Savings
            </li>
            <li className="link" to="/flex">
              Flex Naira
            </li>
          </ul>
          <ul>
            <li className="heading">Company</li>
            <li className="link" to="/about">
              About
            </li>
            <li className="link" to="/FAQs">
              FAQs
            </li>
            <li className="link" to="/blog">
              Blog
            </li>
          </ul>
          <ul>
            <li className="heading">Legal</li>
            <li className="link" to="/terms">
              Terms
            </li>
            <li className="link" to="/privacy">
              Privacy
            </li>
            <li className="link" to="/security">
              Security
            </li>
          </ul>
        </FooterList>
        <FooterIcon>
          <IconContainer>
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="twitter" />
            <img src={Instagram} alt="instagram" />
          </IconContainer>
          <p id="location">
            Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
            Nigeria.
          </p>
          <p>
            <a href="">contact@piggyvest.com</a>
          </p>
          <p id="contact">+234 700 933 933 933</p>
        </FooterIcon>
      </FooterRow>
      <FooterText>
        <p id="knowMore">
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 6 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend.
        </p>
        <p id="year">2016 - 2022 PiggyTech Global Limited - RC 1405222</p>
      </FooterText>
    </FooterComponent>
  );
};

export default FooterSection;
