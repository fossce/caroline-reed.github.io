// import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const Header = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  z-index: 25;
`;


// export const H1 = styled.h1`
//   color: darkgray;
//   font-size: 100%;
//   font-weight: bold;
//   padding: 0.25rem 0rem 0.25rem 1rem;
// `;


export const Nav = styled.nav`
  position: fixed;
  display: block;
  top: 0.25vh;
  right: 0.25vw;
  width: 0%;
  height: auto;
  justify-content: space-between;
  padding: 0.2rem;
`;

export const Burger = styled.div`
  position: fixed;
  display: block;
  top: 0;
  right: 0;
  width: 3.5rem;
  /* height: 3.75rem; */
  padding: 0.25rem 0.75rem 0 0;
  cursor: pointer;
  /* background-color: rgba(100, 100, 100, 1); */
  border-radius: 0rem 0rem 0rem 1.5rem;
  z-index: 30;
`;

// export const BurgerBun = styled.div`
//   position: relative;
//   display: block;
//   width: 100%;
//   height: 0.45rem;
//   margin: 0 0 0.35rem;
//   z-index: 30;
// `;

export const BurgerBar = styled.div`
  position: relative;
  display: block;
  background-color: white;
  /* filter: drop-shadow(0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.56)); */
  width: 100%;
  height: 0.35rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  cursor: pointer;
  z-index: 30;
`;


export const NavLink = styled(Link)`
  font-family: sans-serif;
  position: relative;
  display: inline;
  color: white;
  font-size: 125%;
  filter: drop-shadow(0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.7));
  padding: 0rem 0rem 0rem 1.5rem;
  /* border: thin solid green; */
  width: 100%;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  z-index: 30;
  &.active {
    font-weight: 500;
    text-decoration: underline;
  }
`;

export const NavMenu = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  width: 26rem;
  transform: translateX(27rem);
  height: 3.75rem;
  padding: 1rem 0.75rem;
  align-items: center;
  font-weight: bold;
  /* background-color: rgba(100, 100, 100, 1); */
  border-radius: 0rem 0rem 0rem 1.5rem;
  z-index: 29;
`;
