// src/components/sections/Hero.js
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Container } from "../../common/Container";
import { Button } from "../../common/Button";
import { SocialLinks } from "../../common/SocialLinks";
import { HexagonImageComponent } from "../../ui/HexagonImage";
import { ParticlesCanvas } from "../../ui/ParticlesCanvas";
import {
  HeroBg,
  HeroButtons,
  HeroContainer,
  HeroContent,
  HeroDescription,
  HeroImage,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  MorphingShape,
} from "./hero.styles";
import me from "../../../assets/me.png";
export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const morphingShapeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (morphingShapeRef.current) {
      const x = (mousePosition.x / window.innerWidth) * 100;
      const y = (mousePosition.y / window.innerHeight) * 100;

      morphingShapeRef.current.style.left = `${x}%`;
      morphingShapeRef.current.style.top = `${y}%`;
    }
  }, [mousePosition]);

  return (
    <HeroSection id="home">
      <ParticlesCanvas />
      <HeroBg>
        <div className="circle parallax-element"></div>
        <div className="circle parallax-element"></div>
        <div className="circle parallax-element"></div>
      </HeroBg>
      <MorphingShape ref={morphingShapeRef} />
      <Container>
        <HeroContainer>
          <HeroContent>
            <HeroTitle
              className="glitch"
              data-text="Mohammad Bohlak"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Mohammad Bohlak
            </HeroTitle>
            <HeroSubtitle
              className="neon-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Frontend Developer (React.js)
            </HeroSubtitle>
            <HeroDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* currently residing in Syria. With modest experience, I am eager to grow and showcase my skills in this dynamic field.
               */}
              <span className="animated-text">
                Passionate frontend developer
              </span>
              <span className="animated-text">with one year of experience</span>
              <span className="animated-text">creating responsive,</span>
              <span className="animated-text">
                user-friendly web applications.
              </span>
              <span className="animated-text">
                Specialized in React, JavaScript, and modern CSS frameworks.
              </span>
            </HeroDescription>
            <HeroButtons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                href="/Mohammad_Bohlak_CV_2026.pdf"
                download="Mohammad_Bohlak_CV_2026.pdf"
                className="btn-primary"
              >
                <i className="fas fa-download"></i> Download CV
              </Button>
              <Button href="#projects" className="btn-outline">
                <i className="fas fa-briefcase"></i> View Projects
              </Button>
            </HeroButtons>
            <SocialLinks />
          </HeroContent>
          <HeroImage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <HexagonImageComponent
              // src="https://picsum.photos/seed/profile789/400/400.jpg"
              src={me}
              alt="Profile Photo"
            />
          </HeroImage>
        </HeroContainer>
      </Container>
    </HeroSection>
  );
};
