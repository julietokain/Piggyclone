import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const FooterComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  cursor: pointer;
`;
export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 80%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  ul {
    list-style-type: none;
  }
  .link {
    &:hover {
      color: #083e9e;
    }
  }
  .heading {
    font-weight: 600;
  }
  li {
    font-size: 14px;
    line-height: 30px;
    color: #353535;
  }
`;

export const FooterList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 40%;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    margin-bottom: 3rem;
  }
`;
export const FooterImg = styled.div`
  display: flex;
  flex-direction: column;

  #logo {
    padding-bottom: 2rem;

    @media screen and (max-width: 1024px) {
      width: 150px;
    }
  }

  .compliance {
    width: 140px;
    border: 2px solid #fafafa;
    border-radius: 15px;
    padding: 10px 20px;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    margin-bottom: 3rem;
  }
`;
export const FooterIcon = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  max-width: 27%;
  line-height: 30px;
  color: #353535;
  font-size: 14px;

  #location {
    padding-bottom: 8px;

    @media screen and (max-width: 913px) {
      max-width: 80%;
    }
  }
  #contact {
    &:hover {
      color: #083e9e;
    }
  }

  a {
    color: #353535;
    text-decoration: none;
    &:hover {
      color: #083e9e;
    }
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 1rem;
    min-width: 100%;
  }
`;

export const IconContainer = styled.div`
  img {
    width: 25px;
    margin-left: 5px;
    transition: all 0.4s ease-in-out;

    &:hover {
      -webkit-transform: translateY(-2px);
      transform: translateY(-2px);
    }
  }
`;
export const FooterText = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 5rem;

  #knowMore {
    max-width: 68%;
    font-size: 14px;
    line-height: 30px;
    padding-bottom: 30px;
  }
  #year {
    padding-bottom: 5rem;
    font-size: 14px;
    color: #083e9e;
  }
`;
