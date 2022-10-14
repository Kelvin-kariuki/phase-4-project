import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import { NavLink } from "react-router-dom";

function NavBar({ user, setUser }) {
  

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
      <Logo>
        <Link to="/">Tenderprenuer</Link>
      </Logo>
      <Nav>
      
      <Button >
      <a class="nav-link scrollto" href="#Tender">Post Tender</a>
          
        </Button>
      
        
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
        
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Times Roman", cursive;
  font-size: 3rem;
  color: Blue;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
