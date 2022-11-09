import react, { useState } from "react";
import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Rectangle from "../images/Rectangle 1.png";
import Sidebar from "../components/Sidebar";
import SecuritySection from "../components/SecuritySection";
import InfoSection from "../components/InfoSection";
import InvestmentSection from "../components/InvestmentSection";
import SaverSection from '../components/SaverSection';
import TestimonialSection from '../components/TestimonialSection'
import LogoSection from "../components/LogoSection";
import FooterSection from "../components/FooterSection";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  window.addEventListener('resize',()=>{
    setMobile(window.innerWidth)
  })

  window.addEventListener("scroll", () => {
    window.scrollY > 100
      ? document.getElementById("nav").classList.add("white")
      : document.getElementById("nav").classList.remove("white");
  });

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div
        style={
          mobile > 913
            ? {
                backgroundImage: `url(${Rectangle})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "92% 0",
                backgroundSize: "410px 17%",
                minHeight: "100vh",
                paddingBottom: "80px",
              }
            : {}
        }
      >
        <Navbar toggle={toggle} />
        <HeroSection />
      <SecuritySection />
      <InfoSection />
      <InvestmentSection />
      <SaverSection />
      <TestimonialSection/>
      <LogoSection/>
      <FooterSection/>
      </div>
    </>
  );
};

export default Home;
