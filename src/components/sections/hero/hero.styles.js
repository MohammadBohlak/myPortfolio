import { motion } from "framer-motion";
import styled from "styled-components";

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 100px 0 50px;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.1;

  .circle {
    position: absolute;
    border-radius: 50%;
    background: var(--gradient);

    &:nth-child(1) {
      width: 300px;
      height: 300px;
      top: -150px;
      left: -100px;
      animation: float 8s ease-in-out infinite;
    }

    &:nth-child(2) {
      width: 200px;
      height: 200px;
      bottom: -100px;
      right: -50px;
      animation: float 10s ease-in-out infinite 2s;
    }

    &:nth-child(3) {
      width: 150px;
      height: 150px;
      top: 50%;
      right: 30%;
      animation: float 12s ease-in-out infinite 4s;
    }
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  z-index: 2;
`;

export const HeroTitle = styled(motion.h1)`
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 20px;
  line-height: 1.2;
  color: var(--highlight);
  position: relative;
  display: inline-block;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background: var(--accent);
  }

  @media (max-width: 992px) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled(motion.h2)`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: var(--accent);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

export const HeroDescription = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 40px;
  max-width: 600px;
  line-height: 1.8;
`;

export const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const HeroImage = styled(motion.div)`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MorphingShape = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  background: var(--gradient);
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  opacity: 0.1;
  animation: morph 15s ease-in-out infinite;
  z-index: -1;
`;
