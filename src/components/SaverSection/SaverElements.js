import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SaverComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:5rem;
 
`;
export const SaverContent = styled.div`
  display: flex;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 913px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const SaverImg = styled.div`
  max-width: 50%;
  img {
    width: 600px;
    height: 495px;
    object-fit: cover;

    @media screen and (max-width: 1030px) {
      width: 100vw;
      height: 100vh;
      margin-top: -10rem;
      object-fit: contain;
    }
    @media screen and (max-width: 1030px) {
      margin-top: -11rem;
    }

    @media screen and (max-width: 913px) {
      width: 100vw;
      height: 100vh;
      margin-top: -27rem;
    }
    @media screen and (max-width: 768px) {
      margin-top: -20rem;
    }

    @media screen and (max-width: 543px) {
      width: 100vw;
      height: 100vh;
      margin-top: -22rem;
      object-fit: contain;
    }

    @media screen and (max-width: 540px) {
      margin-top: -18rem;
      width: 100vw;
      height: 100vh;
    }
    @media screen and (max-width: 414px) {
      margin-top: -22rem;
      width: 100vw;
      height: 100vh;
    }
    @media screen and (max-width: 390px) {
      margin-top: -20rem;
      width: 100vw;
      height: 100vh;
    }
    @media screen and (max-width: 375px) {
      margin-top: -18rem;
      width: 100vw;
      height: 100vh;
    }
  }
`;
export const SaverImg1 = styled.div`
margin-right:15px;

`

export const SaverText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0d60d8;
  height: 495px;
  color: white;

  h1 {
    font-size: 51px;
    max-width: 51%;
    line-height: 61.1px;
    padding-bottom: 20px;

    @media screen and (max-width: 913px) {
      text-align: center;
      font-size: 30px;
      line-height: 31.1px;
    }

    @media screen and (max-width: 483px) {
      font-size: 30px;
      line-height: 31.1px;
    }
    @media screen and (max-width: 360px) {
      font-size: 25px;
      line-height: 31.1px;
    }
  }
  #longP {
    max-width: 51%;
    font-size: 16.5px;
    line-height: 27.2px;
    padding-bottom: 50px;

    @media screen and (max-width: 913px) {
      text-align: center;
      font-size: 15px;
      line-height: 20.1px;
    }

    @media screen and (max-width: 483px) {
      font-size: 13px;
      line-height: 18.1px;
    }
  }
`;

export const SaverArrow = styled.div`
  align-self: left;
  display: flex;
  min-width: 51%;

  @media screen and (max-width: 913px) {
    font-size: 15px;
    align-self:center;
    justify-content:center;
  }

  #arrowP {
    margin-top: 8px;
    font-size: 16.5px;

    @media screen and (max-width: 913px) {
      font-size: 15px;
    }
  }
`;