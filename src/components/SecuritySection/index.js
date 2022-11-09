import React from 'react'
import Security from "../../images/security.png";
import {
  SecurityComponent,
  SecurityContent,
  SecurityImg,
  SecurityText,
} from "./SecurityElements";

const SecuritySection = () => {
  return (
    <SecurityComponent>
      <SecurityContent>
        <SecurityImg>
          <img src={Security} alt="security" />
        </SecurityImg>
        <SecurityText>
          <h4>Your security is our priority</h4>
          <p>
            PiggyVest uses the highest level of Internet Security and it is
            secured by 256 bits SSL security encryption to ensure that your
            information is completely protected from fraud.
          </p>
          <p>
            <a href="">Learn more > </a>
          </p>
        </SecurityText>
      </SecurityContent>
    </SecurityComponent>
  );
}

export default SecuritySection
