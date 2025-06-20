import { CgSoftwareDownload } from "react-icons/cg";
import { BsDownload } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
// import "./hero.css";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { LeftHero, RightHero, StyledHero, Title } from "./hero.styles";
import { useRef } from "react";
import styled from "styled-components";
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const btnRef = useRef(null);
  useGSAP(() => {
    gsap.from(leftRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 2,
    });
    gsap.from(rightRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 2,
    });
    gsap.from(btnRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 3,
    });
  });

  const BtnCV = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
    @media (max-width: 850px) {
      order: -1;
    }
    button {
      width: 200px;
      background-color: var(--secondary);
      border-radius: 50px;
      text-align: center;
      padding: 20px 10px;
      color: var(--title);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      border: 1px solid;
      transition: 0.3s;
      &:hover {
        background-color: var(--title);
        color: var(--secondary);
      }
      svg {
        font-size: 20px var(--title);
      }
    }
  `;

  return (
    <StyledHero>
      <LeftHero ref={leftRef} className="hero">
        <Title>Frontend web developer based in Syria.</Title>

        <p className="sub-title me">
          I am Mohammad Bahlaq, a passionate beginner in web development,
          currently residing in Syria. With modest experience, I am eager to
          grow and showcase my skills in this dynamic field.
        </p>
        <div className="all-icons flex">
          <a href="https://www.facebook.com/mohammad.s.bohlak" target="blank">
            <AiFillFacebook style={{ color: "#1877F2" }} />
          </a>
          <a href="https://wa.me/963998026793" target="blank">
            <FaWhatsappSquare style={{ color: "#25D366" }} />
          </a>
          <a href="https://t.me/Mohammad_Bohlak" target="blank">
            <FaTelegram style={{ color: "#0088CC" }} />
          </a>
        </div>
      </LeftHero>
      <RightHero ref={rightRef} className="hero">
        <div className="image">
          <img src="../../../public/me.png" alt="" className="avatar" />
        </div>
      </RightHero>
      <BtnCV ref={btnRef}>
        <button>
          Download CV
          <CgSoftwareDownload />
        </button>
      </BtnCV>
    </StyledHero>
  );
};

export default Hero;
