import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";


export const LogoComponent = styled.div`
  background-color: #f9f9f9;
  width:100vw;
  padding:40px 20px;
  margin-top:5rem;
  display:flex;
  justify-content:center;
`;

export const LogoContent = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  min-width:75%;

  @media screen and (max-width:1024px){
    flex-direction:column;
  }
`;

export const Row1 = styled.div`
  padding: 20px;
  font-size: 30px;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const Row2 = styled.div`
  display: flex;

  img {
    width: 180px;
    padding: 20px;

    @media screen and (max-width: 1024px) {
      width: 150px;
    }
    @media screen and (max-width: 913px) {
      width: 120px;
    }
  }
`;