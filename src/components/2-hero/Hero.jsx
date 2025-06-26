import { CgSoftwareDownload } from "react-icons/cg";
import { BsDownload } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
// import "./hero.css";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { BtnCV, LeftHero, RightHero, StyledHero, Title } from "./hero.styles";
import { useRef } from "react";
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
          <img src="./me.png" alt="" className="avatar" />
        </div>
      </RightHero>
      <BtnCV ref={btnRef}>
        <a href="https://drive.usercontent.google.com/download?id=1SN3XbpTZgy2odNfhNSkxv_8OetyHMGXd&export=download&authuser=0&confirm=t&uuid=63d8bca6-8d5f-48a6-bb6a-b754c2583302&at=AN8xHorZKrWXhu7Oq5s-VmBDfwsa:1750955493512">
          Download CV
          <CgSoftwareDownload />
        </a>
      </BtnCV>
    </StyledHero>
  );
};

export default Hero;
