// src/App.js
import { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Loader } from "./components/common/Loader";
import { ScrollIndicator } from "./components/common/ScrollIndicator";
import { CustomCursor } from "./components/common/CustomCursor";
import { Navigation } from "./components/common/Navigation";
import { Hero } from "./components/sections/hero/Hero";
import { Skills } from "./components/sections/skills/Skills";
import { Projects } from "./components/sections/projects/Projects";
import { Contact } from "./components/sections/contact/Contact";
import { AnimatedBackgroundComponent } from "./components/ui/AnimatedBackground";

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Footer = styled.footer`
  background: var(--dark);
  padding: 50px 0;
  text-align: center;
  border-top: 1px solid var(--border);
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: var(--text);
    font-size: 1.2rem;
    transition: all 0.3s ease;

    &:hover {
      color: var(--accent);
      transform: translateY(-5px);
    }
  }
`;

const FooterText = styled.p`
  color: var(--text);
`;

const MagneticButton = styled(motion.a)`
  position: relative;
  transition: all 0.3s ease;
`;

function App() {
  useEffect(() => {
    // Parallax Effect
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll(".parallax-element");
      const scrollTop = window.pageYOffset;

      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrollTop * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Magnetic Buttons
    const magneticButtons = document.querySelectorAll(".magnetic-btn");

    magneticButtons.forEach((button) => {
      button.addEventListener("mousemove", (e) => {
        const position = button.getBoundingClientRect();
        const x = e.clientX - position.left - position.width / 2;
        const y = e.clientY - position.top - position.height / 2;

        button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });

      button.addEventListener("mouseleave", () => {
        button.style.transform = "translate(0px, 0px)";
      });
    });

    return () => {
      magneticButtons.forEach((button) => {
        button.removeEventListener("mousemove", () => {});
        button.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Loader />
        <ScrollIndicator />
        {/* <CustomCursor /> */}
        <AnimatedBackgroundComponent />
        <Navigation />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer>
          <div className="container">
            <FooterContent>
              <FooterSocial>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </FooterSocial>
              <FooterText>
                &copy; 2023 Alex Morgan. All rights reserved.
              </FooterText>
            </FooterContent>
          </div>
        </Footer>
      </AppContainer>
    </>
  );
}

export default App;
