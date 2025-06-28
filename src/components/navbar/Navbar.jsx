import { useState, useRef } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { gsap } from "gsap";
import { ContainerNavbar, Hamburger, Nav, NavItem } from "./navbar.styles";
import { useGSAP } from "@gsap/react";
import ToggleTheme from "../ToggleTheme";
const Navbar = () => {
  // const tl = useContext(TimelineContext);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const ThemeRef = useRef(null);
  useGSAP(
    () => {
      let anim;
      if (isOpen) {
        anim = gsap.to(navRef.current, {
          left: 0,
          duration: 0.3,
          ease: "power2.out",
          clearProps: "all",
        });
      } else {
        anim = gsap.to(navRef.current, {
          left: "-100%",
          duration: 0.3,
          ease: "power2.in",
          clearProps: "all",
        });
      }
      return () => anim.kill();
    },
    { scope: navRef.current, dependencies: [isOpen] }
  );
  useGSAP(
    () => {
      const tl = gsap.timeline();
      const anim = tl
        .from(navRef.current, {
          y: -200,
          duration: 1,
          ease: "power2.out",
          clearProps: "all",
        })
        .from(
          "li",
          {
            y: -20,
            stagger: 0.1,
            opacity: 0,
            clearProps: "all",
          },
          "-=0.5"
        )
        .from(".toggle-theme", {
          x: 100,
          duration: 0.5,
          opacity: 0,
          clearProps: "all",
        });

      return () => anim.kill();
    },
    { scope: navRef.current }
  );
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ContainerNavbar>
      <Hamburger
        style={{ transition: "opacity 0.8s ease", opacity: isOpen ? 0 : 1 }}
        onClick={toggleMenu}
      >
        <FaBars />
      </Hamburger>
      <Nav ref={navRef} className={isOpen ? "open" : ""}>
        <div className="close-btn" onClick={toggleMenu}>
          <FaTimes />
        </div>

        <NavItem>
          <a href="#hero" onClick={toggleMenu}>
            About
          </a>
        </NavItem>
        <NavItem>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
        </NavItem>
        <NavItem>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </NavItem>
      </Nav>
      <ToggleTheme />
    </ContainerNavbar>
  );
};
export default Navbar;
