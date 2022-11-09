import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "animate.css/animate.min.css";
import Rectangle from "../../images/Rectangle 1.png";

export const HeroComponent = styled.div`
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 79%;

  @media screen and (max-width: 913px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 350px;
    }
  }
`;
export const HeroText = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  h1 {
    font-size: 65px;
    line-height: 82.42px;
    color: #0c1825;
  }

  p {
    max-width: 60%;
    box-sizing: border-box;
    color: #353535;
    line-height: 27.2px;
    font-size: 16.5px;
    margin-bottom: 30px;
    margin-top: 10px;
  }

  @media screen and (max-width: 1050px) {
    h1 {
      font-size: 44px;
      line-height: 57px;
      margin-top: 30px;
    }
    p {
      max-width: 100%;
      font-size: 16.5px;
      opacity: 1;
    }
  }

  @media screen and (max-width: 913px) {
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 40px;
      line-height: 57px;
      margin-top: 30px;
    }
    p {
      max-width: 100%;
      font-size: 16px;
      opacity: 1;
    }
  }
`;
export const HeroBtn = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;

  @media screen and (max-width: 913px) {
    justify-content: center;
    align-items: center;
  }
`;
export const HeroBtnLink = styled(LinkR)`
  border-radius: 12px;
  font-size: 16.5px;
  font-weight: 600;
  padding: 18px 30px;
  white-space: nowrap;
  text-decoration: none;
  background-color: #353535;
  margin-bottom:20px;
  color: white;
  transition: all 0.8s ease-in-out;

  &:hover {
    border: 1px solid #0d60d8;
    background-color: #0d60d8;
    color: white;
  }
`;
export const HeroBtnLink1 = styled(LinkR)`
  border-radius: 12px;
  border: 1px solid #353535;
  margin-bottom: 40px;
  padding: 12px 12px;
  align-items: center;
  display: flex;
  margin-right: 0.6rem;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
  color: #353535;

  &:hover {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
  }

  img {
    width: 20px;
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 913px) {
    margin-bottom: 80px;
  }
`;
export const HeroImg = styled.aside``;
