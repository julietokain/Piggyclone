import React from 'react'
import Arrow5 from "../../images/arrow5.svg";
import PrettyLady from "../../images/prettylady.jpeg";
import {
  SaverComponent,
  SaverContent,
  SaverText,
  SaverArrow,
  SaverImg1,
  SaverImg,
} from "./SaverElements";

const SaverSection = () => {
  return (
    <SaverComponent>
      <SaverContent>
        <SaverText>
          <h1>Meet the saver of the month!</h1>
          <p id="longP">
            Every month, we shine a spotlight on one saver, asking them
            questions about their savings culture and how the product is
            specifically helping them shape how they spend and save for future
            responsibilities.
          </p>
          <SaverArrow id="">
            <SaverImg1>
              <img src={Arrow5} alt="arrow5" />
            </SaverImg1>
            <p id="arrowP">Meet Tito</p>
          </SaverArrow>
        </SaverText>
        <SaverImg>
          <img src={PrettyLady} alt="prettylady" />
        </SaverImg>
      </SaverContent>
    </SaverComponent>
  );
}

export default SaverSection
