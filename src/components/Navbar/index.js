import React from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../images/logo.svg";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcons,
  NavMenu,
  NavItems,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavBtnLink2,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav id="nav">
        <NavContainer>
          <NavLogo to="/">
            <img src={Logo} alt="logo" />
          </NavLogo>
          <MobileIcons onClick={toggle}>
            <FaBars />
          </MobileIcons>
          <NavMenu>
            <NavItems>
              <NavLinks to="save">Save</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="invest">Invest</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="stories">Stories</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="faqs">FAQs</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="blog">Blog</NavLinks>
            </NavItems>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
            <NavBtnLink2 to="/account">Create free account</NavBtnLink2>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
