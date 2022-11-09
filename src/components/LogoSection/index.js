import React from 'react'
import Logo1 from "../../images/image (1).png";
import Logo2 from "../../images/image (2).png";
import Logo3 from "../../images/image.png";
import { LogoComponent, LogoContent, Row1, Row2 } from "./LogoElements";

export const LogoSection = () => {
  return (
    <LogoComponent>
      <LogoContent>
        <Row1>
          <h2>As featured in</h2>
        </Row1>
        <Row2>
          <img src={Logo3} alt="logo3" />
          <img src={Logo1} alt="logo1" />
          <img src={Logo2} alt="logo2" />
        </Row2>
      </LogoContent>
    </LogoComponent>
  );
}


export default LogoSection;