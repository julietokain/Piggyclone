import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";


export const InvestmentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;
export const InvestmentContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 75%;

  @media screen and (max-width: 913px) {
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align:center;
    max-width: 100%;
  }
`;

export const InvestmentImg = styled.div`
  #mobile {
    display: none;
  }
 
  @media screen and (max-width: 913px) {
    #mobile {
      display: block;
      width:250px;
      padding-bottom:100px;
    }
    #desktop {
      display: none;
    }
  }
`;
export const InvestmentText = styled.div`
  max-width: 46%;

  h1 {
    font-size: 51px;
    margin-top:2rem;
    margin-bottom: 2rem;
    color: #0c1825;

    @media screen and (max-width: 913px) {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 40px;
      font-size: 31px;
      max-width: 100vw;
    }
  }
  p {
    margin-bottom: 30px;
    color: #353535;
    line-height: 27.2px;
    max-width: 90%;

    @media screen and (max-width: 913px) {
      max-width: 100vw;
    }
  }

  #InvestmentLink {
    color: #7913e5;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }
  #InvestmentLink:after {
    content: "";
    height: 15px;
    width: 0px;
    background-image: linear-gradient(180deg, transparent 65%, #f6dbf8 0);
    position: relative;
    right: 0%;
    margin-top: -4.5%;
    transition: 1s;
  }
  #InvestmentLink:hover:after {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55%;
    left: 0%;
  }
  @media screen and (max-width: 913px) {
    font-size: 12px;
  }
`;
export const InvestmentBtn = styled(LinkR)`
  padding: 12px 30px;
  width: 200px;
  text-align: center;
  border-radius: 50px;
  font-weight: 600;
  color: #7913e5;
  background-color: #f7f0ff;
  text-decoration:none;

  @media screen and (max-width: 913px) {
    padding: 12px 20px;
    font-size: 12px;
  }
`;