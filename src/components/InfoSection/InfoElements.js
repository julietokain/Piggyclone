import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";


export const InfoComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;
export const InfoContent = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 3fr);
  grid-template-rows: repeat(3, -webkit-min-content);
  grid-template-rows: repeat(3, min-content);
  grid-gap: 10px 40px;
  max-width:80%;


  @media screen and (max-width: 913px) {
    grid-template-columns: repeat(1, 1fr); 
    grid-gap: 15px;
    align-items:center;
    text-align:center;
  }
  
`;
export const InfoBox1 = styled.div`
  grid-row: span 2;
  border-radius: 20px;
  padding: 30px 10px 30px 30px;
  cursor: pointer;
  max-width: 352px;
  margin-bottom: 45px;
  line-height: 27px;

  h2 {
    font-size: 38px;
    line-height: 40.08px;
    color: #0c1825;
    padding-top:20px;
    padding-bottom: 25px;
  }
  p {
    color: #353535;
    font-size: 16.5px;
    padding-bottom:50px;
  }
`;
export const InfoBtn = styled.div`

`;
export const InfoBtnLink = styled(LinkR)`
  border-radius: 12px;
  border: 1px solid gray;
  padding: 16px 22px;
  white-space: nowrap;
  font-weight: 600;
  text-decoration: none;
  background-color: #353535;
  color: white;
  transition: all 0.8s ease-in-out;

  &:hover {
    border: 1px solid #0d60d8;
    background-color: #0d60d8;
    color: white;
  }
`;

export const InfoBox = styled.div`
  border-radius: 20px;
  padding: 30px 10px 10px 30px;
  cursor: pointer;
  background-color: #f9f9f9;
  max-width: 352px;
  margin-bottom: 45px;

  h2 {
    font-size: 20px;
    line-height: 25.18px;
    padding-top: 30px;
    padding-bottom: 20px;
  }
  p {
    font-size: 16.12px;
    line-height: 27.5px;
    color: #353535;
  }
  #pig {
    margin-top: 25px;
  }

  #flex {
    margin-top: 25px;
  }
`;
export const InfoImg = styled.div`

img{
    width:50px;
}
`;

export const ArrowP = styled.div`
  display: flex;
  padding-top: 40px;
  color: #353535;

  @media screen and (max-width:913px) {
    justify-content:center;
    align-self:center;
  }
  p {
    margin-top: 3px;
  }
  &:hover {
    -webkit-transform: translateX(5px);
    transform: translateX(5px);
    transition:0.5s;
  }
`;
export const ArrowImg = styled.div`
  margin-right:10px;
`;


