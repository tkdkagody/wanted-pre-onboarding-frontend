import styled from "styled-components";

export const Container = styled.nav`
  width: 100vw;
  height: 88px;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
`;

export const Logo = styled.div`
  color: gainsboro;
  cursor: pointer;
  margin: 0 0 0 2rem;
  font-size: 1.3rem;
  font-weight: 700;
`;

export const NavList = styled.div`
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 2rem;
`;

export const NavItem = styled.div`
  font-size: 1.2rem;
  text-decoration: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  margin-right: 2rem;
`;
