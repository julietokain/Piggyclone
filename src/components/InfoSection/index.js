import React from 'react'
import Arrow1  from "../../images/arrow1.svg";
import Arrow2 from "../../images/arrow2.svg";
import Arrow3 from "../../images/arrow3.svg";
import Arrow4 from "../../images/arrow4.svg";
import Piggy from "../../images/piggy.png";
import SafeLock from "../../images/safelock.png";
import Target from "../../images/target.png";
import Flex from "../../images/flex.png";
import {
  InfoComponent,
  InfoContent,
  InfoBox1,
  InfoBtn,
  InfoBtnLink,
  InfoBox,
  InfoImg,
  ArrowP,
  ArrowImg,
  
} from "./InfoElements";




const InfoSection = () => {
  return (
    <InfoComponent>
      <InfoContent>
        <InfoBox1>
          <h2>4 ways to build your savings</h2>
          <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
          <InfoBtn>
            <InfoBtnLink to="/saving">Start Saving</InfoBtnLink>
          </InfoBtn>
        </InfoBox1>
        <InfoBox>
          <InfoImg>
            <img src={Piggy} alt="piggy" />
          </InfoImg>
          <h2>Automated Savings</h2>
          <p>
            Build a dedicated savings faster on your terms automatically or
            manually.
          </p>
          <ArrowP id="pig">
            <ArrowImg>
              <img src={Arrow1} alt="arrow1" />
            </ArrowImg>
            <p>Piggybank</p>
          </ArrowP>
        </InfoBox>
        <InfoBox>
          <InfoImg>
            <img src={SafeLock} alt="safeLock" />
          </InfoImg>
          <h2>Fixed Savings</h2>
          <p>
            Lock money away for a fixed duration with no access to it until
            maturity. It’s like having a custom fixed deposit.
          </p>
          <ArrowP>
            <ArrowImg>
              <img src={Arrow2} alt="arrow2" />
            </ArrowImg>
            <p>Safelock</p>
          </ArrowP>
        </InfoBox>
        <InfoBox>
          <InfoImg>
            <img src={Target} alt="target" />
          </InfoImg>
          <h2>Goal-oriented Savings</h2>
          <p>
            Reach all your savings goals faster. Save towards multiple goals on
            your own or with a group.
          </p>
          <ArrowP>
            <ArrowImg>
              <img src={Arrow3} alt="arrow3" />
            </ArrowImg>
            <p>Target Savings</p>
          </ArrowP>
        </InfoBox>
        <InfoBox>
          <InfoImg>
            <img src={Flex} alt="flex" />
          </InfoImg>
          <h2>Flexible Savings</h2>
          <p>
            Save, transfer, withdraw, manage and organise your money for free at
            any time.
          </p>
          <ArrowP id="flex">
            <ArrowImg>
              <img src={Arrow4} alt="arrow4" />
            </ArrowImg>
            <p>Flex Naira</p>
          </ArrowP>
        </InfoBox>
      </InfoContent>
    </InfoComponent>
  );
}

export default InfoSection