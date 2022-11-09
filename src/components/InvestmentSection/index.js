import React from 'react'
import Group6 from "../../images/Group 6.png";
import Invest from "../../images/invest.png";
import {
  InvestmentContainer,
  InvestmentContent,
  InvestmentImg,
  InvestmentText,
  InvestmentBtn,
} from "./InvestmentElements";

const InvestmentSection = () => {
  return (
    <InvestmentContainer>
      <InvestmentContent>
        <InvestmentImg>
          <img id="desktop" src={Group6} alt="group6" />
          <img id="mobile" src={Invest} alt="Invest" />
        </InvestmentImg>
        <InvestmentText>
          <InvestmentBtn>Up To 25% Returns</InvestmentBtn>
          <h1>Access investment opportunities</h1>
          <p>
            Invest securely and confidently on the go. Grow your money
            confidently by investing in pre-vetted investment opportunities.
          </p>
          <p>
            <a id="InvestmentLink"href=""> Learn more about Investments > </a>
          </p>
        </InvestmentText>
      </InvestmentContent>
    </InvestmentContainer>
  );
}

export default InvestmentSection