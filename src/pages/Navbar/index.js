import React from "react";
import { useRouter } from "../../utils/useRouter";
import * as Styles from "./styles";

export const Navbar = () => {
  const { routeTo } = useRouter();
  const navLinks = ["signup", "signin", "todo"];

  return (
    <Styles.Container>
      <Styles.Logo
        onClick={() => {
          routeTo("/todo");
        }}
      >
        TODO LIST
      </Styles.Logo>
      <Styles.NavList>
        {navLinks.map((nav, idx) => {
          return (
            <Styles.NavItem key={idx} onClick={() => routeTo(`/${nav}`)}>
              {nav.toLocaleUpperCase()}
            </Styles.NavItem>
          );
        })}
      </Styles.NavList>
    </Styles.Container>
  );
};
