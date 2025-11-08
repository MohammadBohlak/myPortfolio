// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #0a0a12;
    --secondary: #1a1a2e;
    --accent: #ff2e63;
    --light: #f5f5f5;
    --dark: #050508;
    --gradient: linear-gradient(135deg, #ff2e63, #08d9d6);
    --text: #b8bec8;
    --highlight: #f5f5f5;
    --card-bg: rgba(26, 26, 46, 0.7);
    --border: rgba(255, 46, 99, 0.3);
    --neon: #08d9d6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--primary);
    color: var(--text);
    overflow-x: hidden;
    line-height: 1.6;
    /* cursor: none; */
  }

  /* Loading Animation */
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Float Animation */
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  /* Pulse Animation */
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  /* Rotate Animation */
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Glitch Animation */
  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-5px, 5px);
    }
    40% {
      transform: translate(-5px, -5px);
    }
    60% {
      transform: translate(5px, 5px);
    }
    80% {
      transform: translate(5px, -5px);
    }
    100% {
      transform: translate(0);
    }
  }

  /* Fade In Up Animation */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Text Reveal Animation */
  @keyframes textReveal {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  /* Glitch Animation Parts */
  @keyframes glitch-anim {
    0% {
      clip: rect(65px, 450px, 119px, 0);
    }
    20% {
      clip: rect(29px, 450px, 16px, 0);
    }
    40% {
      clip: rect(76px, 450px, 85px, 0);
    }
    60% {
      clip: rect(20px, 450px, 67px, 0);
    }
    80% {
      clip: rect(85px, 450px, 134px, 0);
    }
    100% {
      clip: rect(17px, 450px, 94px, 0);
    }
  }

  @keyframes glitch-anim2 {
    0% {
      clip: rect(32px, 450px, 82px, 0);
    }
    20% {
      clip: rect(98px, 450px, 45px, 0);
    }
    40% {
      clip: rect(53px, 450px, 22px, 0);
    }
    60% {
      clip: rect(67px, 450px, 61px, 0);
    }
    80% {
      clip: rect(14px, 450px, 79px, 0);
    }
    100% {
      clip: rect(88px, 450px, 29px, 0);
    }
  }

  /* Move Animation */
  @keyframes move {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.1;
      border-radius: 0;
    }
    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }

  /* Morph Animation */
  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }

  /* Neon Text Effect */
  .neon-text {
    color: var(--neon);
    text-shadow: 0 0 10px var(--neon), 0 0 20px var(--neon), 0 0 30px var(--neon);
  }

  /* Glitch Effect */
  .glitch {
    position: relative;
    color: var(--highlight);
    font-size: 2.8rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 3px;
    animation: glitch 5s infinite;
  }

  /* .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .glitch::before {
    left: 2px;
    text-shadow: -1px 0 var(--accent);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }

  .glitch::after {
    left: -2px;
    text-shadow: -1px 0 var(--neon);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
  } */

  /* Text Reveal Animation */
  .text-reveal {
    position: relative;
    overflow: hidden;
  }

  .text-reveal::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary);
    animation: textReveal 1.5s ease forwards;
    animation-delay: 0.5s;
  }

  /* Staggered Animation */
  .stagger-animation {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.5s ease;
  }

  .stagger-animation.active {
    opacity: 1;
    transform: translateY(0);
  }

  /* Parallax Effect */
  .parallax-element {
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  /* Morphing Shape */
  .morphing-shape {
    position: absolute;
    width: 300px;
    height: 300px;
    background: var(--gradient);
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    opacity: 0.1;
    animation: morph 15s ease-in-out infinite;
    z-index: -1;
  }

  /* Animated Text */
  .animated-text {
    display: inline-block;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease forwards;
  }

  .animated-text:nth-child(1) {
    animation-delay: 0.1s;
  }

  .animated-text:nth-child(2) {
    animation-delay: 0.2s;
  }

  .animated-text:nth-child(3) {
    animation-delay: 0.3s;
  }

  .animated-text:nth-child(4) {
    animation-delay: 0.4s;
  }

  .animated-text:nth-child(5) {
    animation-delay: 0.5s;
  }

  /* Responsive */
  @media (max-width: 992px) {
    .hero-container {
      flex-direction: column;
      text-align: center;
    }

    .hero-title::after {
      left: 50%;
      transform: translateX(-50%);
    }

    .hero-buttons {
      justify-content: center;
    }

    .social-links {
      justify-content: center;
    }

    .contact-container {
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }

    .hero-title {
      font-size: 2.5rem;
    }

    .hero-subtitle {
      font-size: 1.5rem;
    }

    .hexagon {
      width: 250px;
      height: 250px;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 576px) {
    .hero-title {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 1.2rem;
    }

    .hexagon {
      width: 200px;
      height: 200px;
    }

    .section-title {
      font-size: 2rem;
    }
  }
`;
