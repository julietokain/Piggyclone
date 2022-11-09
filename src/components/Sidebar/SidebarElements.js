import styled from 'styled-components'
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import {FaTimes} from 'react-icons/fa'
import { icons } from 'react-icons';



export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
   
`;

export const NavLogo = styled(LinkR)`
justify-self:flex-start;
width:100px;
cursor:pointer;
align-items:center;
text-decoration:none;

img{
    width:180px;
    margin-left:1.5rem;
}
`;

export const CloseIcon = styled(FaTimes)`
color :black;
margin-right:1.5rem;
`;

export const Icon = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-top:2rem;
background:transparent;
font-size:2rem;
cursor:pointer;
max-height: 3%;
outline:none;
`
export const SidebarWrapper = styled.div`
  color:#fff;
`
export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(6,80px);
margin-top:-10rem;
text-align:center;

@media screen and (max-width:480px){
    grid-template-rows:repeat(6, 60px);
}
`
export const SidebarLink = styled(LinkS)`
display:flex;
justify-content:center;
align-items:center;
font-size:1.1rem;
text-decoration:none;
list-style:none;
transition: 0.2s ease-in-out;
text-decoration:none;
color:black;
cursor:pointer;
`;

export const SideBtnWrap = styled.div`
display:flex;
justify-content:center;
`

export const SidebarRoute = styled(LinkR)`
  border-radius: 12px;
  border: 0px;
  margin-top:-3rem;
  margin-bottom:3rem;
  white-space: nowrap;
  padding: 16px 110px;
  font-size: 1.1rem;
  font-weight: 600px;
  color: #0c1825;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
  text-decoration: none;

  &:hover {
    border: 1px solid #0d60d8;
    color: #0d60d8;
  }
`;

export const SidebarRoute2 = styled(LinkR)`
  border-radius: 12px;
  border: 0px solid #353535;
  white-space: nowrap;
  padding: 16px 70px;
  font-size: 16.5px;
  font-weight: 600px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  background-color: #0c1825;
  color: white;
  transition: all 0.8s ease-in-out;

  &:hover {
    border: 1px solid #0d60d8;
    background-color: #0d60d8;
    color: white;
  }
`;