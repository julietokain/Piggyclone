import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const TestimonialComponent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const TestimonialContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  max-width: 73%;

  @media screen and (max-width: 913px) {
    align-items: center;
    text-align: left;
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 1024px) {
    align-items: center;
    text-align: center;
    flex-direction: column-reverse;
  }
`;

export const ContentWrapper = styled.div`
  height: 300px;
  overflow: hidden;
`;

export const AllTestimonials = styled.div`
  animation: 35s linear 0s infinite normal none running anime;

  @keyframes anime {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-675px);
    }
  }
`;

export const Testimonials = styled.div``;

export const Description = styled.div`
  h6 {
    font-size: 15px;
    color: #0c1825;
  }

  p {
    font-size: 12px;
    line-height: 20px;
    color: #353535;
  }
`;

export const Testimonial = styled.div`
  max-width: 70%;
  display: flex;
  padding: 10px;
  background-color: #f9f9f9;
  margin-bottom: 10px;

  @media screen and (max-width: 913px) {
    max-width: 90%;
    margin: auto;
    align-items: left;
    text-align: left;
  }
  @media screen and (max-width: 1024px) {
    margin: auto;
    align-items: left;
    text-align: left;
  }
`;
export const TestimonialImg = styled.div`
  img {
    width: 50px;
    border-radius: 50px;
    margin-right: 15px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  h2 {
    font-size: 37px;
    line-height: 50px;
    color: #0c1825;
    padding-bottom: 10px;
  }
  p {
    color: #353535;
    line-height: 30px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 913px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: -15rem;

    h2 {
      font-size: 28px;
      line-height: 30px;
      color: #0c1825;
      padding-bottom: 10px;
    }
    p {
      color: #353535;
      line-height: 25px;
      font-size: 15px;
      padding-bottom: 20px;
    }
  }
`;
export const TestBtn = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;

  @media screen and (max-width: 913px) {
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1024px) {
    margin: auto;
  }
`;
export const TestBtnLink = styled(LinkR)`
  border-radius: 12px;
  font-size: 16.5px;
  font-weight: 600;
  padding: 18px 30px;
  white-space: nowrap;
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
export const TestBtnLink1 = styled(LinkR)`
  border-radius: 12px;
  border: 1px solid #353535;
  margin-top: 40px;
  padding: 12px 12px;
  align-items: center;
  display: flex;
  margin-right: 0.6rem;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
  color: #353535;

  img {
    width: 20px;
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 913px) {
    margin-bottom: 80px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 80px;
  }
`;
