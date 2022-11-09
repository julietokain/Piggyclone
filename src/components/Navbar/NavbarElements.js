import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
  background-color: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  &.white {
    box-shadow: rgb(206, 211, 218) 0px 0px 7px 0px;
    background-color: white;
  }

  @media screen and (max-width: 913px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
 display:flex;
 justify-content:space-between;
 height:80px;
 z-index:1;
 width:100%;
 padding:0 24px;
 max-width:80%;
`;

export const NavLogo = styled(LinkR)`
justify-self:flex-start;
width:100px;
cursor:pointer;
align-items:center;
display:flex;
text-decoration:none;

img{
    width:200px;
}
`
;
export const MobileIcons = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
;
export const NavMenu = styled.ul`
  display:flex;
  align-items:center;
  list-style:none;
  text-align:center;
  margin-right:-40px;

  @media screen and (max-width:1024px){
    display:none;
  }
`;

export const NavItems = styled.li`
   height:80px;
  
`;

export const NavLinks = styled(LinkS)`
  display:flex;
  align-items:center;
  text-decoration:none;
  padding: 0 1rem;
  height:100%;
  cursor:pointer;

  &.active{
    border-bottom: 3px solid black;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 12px;
  border: 1px solid #353535;
  padding: 16px 22px;
  margin-right: 0.6rem;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.6s ease-in-out;
  color: #353535;

  &:hover {
    border: 1px solid #0d60d8;
    color: #0d60d8;
  }
`;
export const NavBtnLink2 = styled(LinkR)`
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
