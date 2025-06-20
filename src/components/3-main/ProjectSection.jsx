import { AiOutlineGithub } from "react-icons/ai";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectCard, StyledProjectsSection } from "./main.styles";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectSection = ({ data }) => {
  const projectCardsRef = useRef([]);
  const sectionRef = useRef(null);

  // Function to add cards to ref array
  const addToCardsRef = (el, index) => {
    projectCardsRef.current[index] = el;
  };

  useGSAP(() => {
    // Animation for project cards
    gsap.from(projectCardsRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15, // Stagger effect between cards
      ease: "power2.out",
    });

    // Additional hover animation for each card
    projectCardsRef.current.forEach((card) => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: "power1.out",
        paused: true,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
        onEnter: () => gsap.to(card, { scale: 1.02, duration: 0.3 }),
        onLeaveBack: () => gsap.to(card, { scale: 1, duration: 0.3 }),
      });
    });
  }, [data]);

  return (
    <StyledProjectsSection className="right-section flex" ref={sectionRef}>
      {data.map((item, i) => {
        return (
          <div key={i} ref={(el) => addToCardsRef(el, i)}>
            <ProjectCard key={item.id}>
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <div className="box">
                <h1 className="title">{item.title}</h1>
                <p className="sub-title">{item.description}</p>
                <div className="flex icons">
                  <a href={item.github} className="link flex" target="blank">
                    on github <AiOutlineGithub />
                  </a>

                  <a href={item.link} className="link flex" target="blank">
                    visit{" "}
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </ProjectCard>
          </div>
        );
      })}
    </StyledProjectsSection>
  );
};

export default ProjectSection;
