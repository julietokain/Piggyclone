import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SecurityComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: right;
  margin-top: 5rem;
  margin-bottom: 5rem;
  @media screen and (max-width: 913px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const SecurityContent = styled.div`
  display: flex;
  align-items: right;
  justify-content: space-between;
  max-width: 71%;

  @media screen and (max-width: 913px) {
    flex-direction: column;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
export const SecurityText = styled.div`
  h4 {
    font-size: 33px;
    line-height: 41.21px;
    font-weight: 700;
    color: #0c1825;
    opacity: 1;

    @media screen and (max-width: 913px) {
      padding-top: 30px;
    }
  }
  p {
    margin-top: 10px;
    margin-bottom: 40px;
    max-width: 80%;
    font-size: 15.5px;
    font-family: DM Sans, sans-serif;
    color: #353535;
    line-height: 27.2px;

    @media screen and (max-width: 913px) {
      display: flex;
      justify-content: center;
      padding: 0px 50px;
      max-width: 100vw;
      align-items: center;
      text-align: center;
    }
  }

  a {
    line-height: 27.2px;
    font-size: 16.5px;
    color: #0d60d8;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }
  a:after {
    content: "";
    height: 15px;
    width: 0px;
    background-image: linear-gradient(180deg, transparent 65%, #d0e2fc 0);
    position: relative;
    right: 0%;
    margin-top: -2.5%;
    transition: 1s;
  }
  a:hover:after {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    left: 0%;
  }
`;
export const SecurityImg = styled.div`
margin-right:3rem;
 img{
    margin-top:10px;
    width:100px;
 }
`