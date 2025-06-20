import { useRef, useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { Title } from "../2-hero/hero.styles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Buttons, ProjectCard, StyledMain } from "./main.styles";
import myProjects from "./myProjects";
import ProjectSection from "./ProjectSection";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const titleRef = useRef(null);
  const buttonsRef = useRef([]);

  useGSAP(() => {
    // Animation for title
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(buttonsRef.current, {
      scrollTrigger: {
        trigger: ".buttons-container",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "back.out",
    });
  }, []);

  // Function to add buttons to the ref array
  const addToButtonsRef = (el, index) => {
    buttonsRef.current[index] = el;
    console.log(el);
  };

  return (
    <div>
      <StyledMain>
        <Title
          ref={titleRef}
          style={{
            textAlign: "center",
          }}
        >
          My Projects
        </Title>

        <Buttons className="buttons-container">
          <button
            ref={(el) => addToButtonsRef(el, 0)}
            className={` ${currentActive === "all" ? "active" : ""}`}
            onClick={() => {
              setCurrentActive("all");
              setArr(myProjects);
            }}
          >
            All Projects
          </button>

          {/* <button
            ref={(el) => addToButtonsRef(el, 1)}
            className={` ${currentActive === "css" ? "active" : ""}`}
            onClick={() => {
              setCurrentActive("css");
              setArr(myProjects.filter((item) => item.category === "css"));
            }}
          >
            HTML & CSS
          </button> */}

          <button
            ref={(el) => addToButtonsRef(el, 2)}
            className={` ${currentActive === "js" ? "active" : ""}`}
            onClick={() => {
              setCurrentActive("js");
              setArr(myProjects.filter((item) => item.category === "js"));
            }}
          >
            JavaScript
          </button>

          <button
            ref={(el) => addToButtonsRef(el, 3)}
            className={` ${currentActive === "react" ? "active" : ""}`}
            onClick={() => {
              setCurrentActive("react");
              setArr(myProjects.filter((item) => item.category === "react"));
            }}
          >
            React
          </button>
        </Buttons>

        <ProjectSection data={arr} />
      </StyledMain>
    </div>
  );
};

export default Main;
