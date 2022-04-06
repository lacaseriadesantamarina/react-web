import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {MdRestaurant, MdRestaurant as WebIcon} from 'react-icons/md'


export const Nav = styled.nav`
  background: #282828;
  height: 80px;
  display: flex;
  position: fixed;
  height: 7vh;
  width:100%;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
    color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  position: fixed;
  padding-top:1vh;
  @media screen and (max-width: 750px) {
    position: fixed;
    left: 25px;
  }
  @media screen and (max-width: 650px) {
    font-size:4vw;
    padding-top:2.5vh;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  p {
      
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(MdRestaurant)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;