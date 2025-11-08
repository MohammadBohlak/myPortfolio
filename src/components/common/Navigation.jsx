// src/components/common/Navigation.js
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "./Container";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 0;
  z-index: 1000;
  transition: all 0.3s ease;

  &.scrolled {
    background: rgba(10, 10, 18, 0.95);
    backdrop-filter: blur(10px);
    padding: 15px 0;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--highlight);
  letter-spacing: 1px;
  font-family: "Orbitron", sans-serif;

  span {
    color: var(--accent);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
`;

const NavLink = styled.a`
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
  position: relative;
  transition: all 0.3s ease;
  padding: 5px 0;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent);
    transition: all 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: var(--highlight);
  }
`;

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <Nav className={isScrolled ? "scrolled" : ""}>
      <Container>
        <NavContainer>
          <Logo>
            Portfolio<span>.</span>
          </Logo>
          <NavLinks>
            <li>
              <NavLink onClick={() => scrollToSection("home")}>Home</NavLink>
            </li>
            <li>
              <NavLink onClick={() => scrollToSection("skills")}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => scrollToSection("projects")}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => scrollToSection("contact")}>
                Contact
              </NavLink>
            </li>
          </NavLinks>
        </NavContainer>
      </Container>
    </Nav>
  );
};
