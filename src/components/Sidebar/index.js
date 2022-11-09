import React from 'react'
import Logo from "../../images/logo.svg";
import {
  SidebarContainer,
  NavContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarRoute2,
  NavLogo,
} from "./SidebarElements";

 
const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <NavLogo to="/">
          <img src={Logo} alt="logo" />
        </NavLogo>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">Save</SidebarLink>
          <SidebarLink to="invest">Invest</SidebarLink>
          <SidebarLink to="stories">Stories</SidebarLink>
          <SidebarLink to="FAQs">FAQs</SidebarLink>
          <SidebarLink to="blog">Blog</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign in</SidebarRoute>
        </SideBtnWrap>
        <SideBtnWrap>
          <SidebarRoute2 to="/create">Create free account</SidebarRoute2>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar