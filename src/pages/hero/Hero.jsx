import { CgSoftwareDownload } from "react-icons/cg";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import me from "../../assets/images/me.png";
import {
  CVBtn,
  Icons,
  Image,
  LeftHero,
  RightHero,
  StyledHero,
  SubTitle,
  Title,
} from "./hero.styles";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const BtnRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({ duration: 1.5 });
    const anim = tl
      .from(leftRef.current, {
        x: -200,
        duration: 1,
        ease: "power2.out",
        opacity: 0,
      })
      .from(".icons a", {
        // y: 50,
        duration: 0.5,
        ease: "ease",
        opacity: 0,
        stagger: 0.1,
      })
      .from(
        rightRef.current,
        {
          x: 200,
          duration: 1,
          ease: "power2.out",
          opacity: 0,
        },
        "-=1.5"
      )
      .to("img", {
        duration: 1,
        ease: "power2.out",
        boxShadow: " 0 0 29px inset gray",
      })
      .from(BtnRef.current, {
        y: 50,
        duration: 1,
        ease: "power2.out",
        opacity: 0,
      });

    return () => anim.kill();
  }, []);
  return (
    <StyledHero id="hero">
      <LeftHero ref={leftRef}>
        <Title>Frontend web developer based in Syria.</Title>
        <SubTitle>
          I am Mohammad Bahlaq, a passionate beginner in web development,
          currently residing in Syria. With modest experience, I am eager to
          grow and showcase my skills in this dynamic field.
        </SubTitle>
        <Icons className="icons">
          <a
            target="blank"
            href="https://www.linkedin.com/in/mohammad-bohlak-494aa6371/"
            className="linkedin"
          >
            <AiFillLinkedin />
          </a>
          <a
            target="blank"
            href="https://www.facebook.com/mohammad.s.bohlak"
            className="facebook"
          >
            <AiFillFacebook />
          </a>
          <a
            target="blank"
            href="https://wa.me/963998026793"
            className="whatsapp"
          >
            <FaWhatsappSquare />
          </a>
          <a
            target="blank"
            href="https://t.me/Mohammad_Bohlak"
            className="telegram"
          >
            <FaTelegram />
          </a>
        </Icons>
      </LeftHero>
      <RightHero ref={rightRef}>
        <Image>
          <img src={me} alt="Me" />
        </Image>
      </RightHero>
      <CVBtn ref={BtnRef}>
        <a href="/cv.pdf" download="Mohammad_Bohlak_CV_2025.pdf">
          <span>Downolad CV</span>
          <CgSoftwareDownload />
        </a>
      </CVBtn>
    </StyledHero>
  );
};

export default Hero;
