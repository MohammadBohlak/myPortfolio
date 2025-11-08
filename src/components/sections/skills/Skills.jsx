// src/components/sections/Skills.js
import { useEffect, useRef } from "react";
import { Container } from "../../common/Container";
import { SKILLS_DATA } from "../../../utils/constants";
import {
  SkillBar,
  SkillHeader,
  SkillItem,
  SkillName,
  SkillPercentage,
  SkillProgress,
  SkillsContainer,
  SkillsSection,
} from "./skills.styles";
import { SectionTitle } from "../../common/sectionTitle";
import { SectionSubtitle } from "../../common/SectionSubtitle";

export const Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector(".skill-progress");
            const width = progressBar.getAttribute("data-width");

            setTimeout(() => {
              progressBar.style.width = width;
            }, 500);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Technical skills and expertise I've developed over the years
        </SectionSubtitle>

        <SkillsContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SKILLS_DATA.map((skill, index) => (
            <SkillItem
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              variants={itemVariants}
              className="stagger-animation"
            >
              <SkillHeader>
                <SkillName>{skill.name}</SkillName>
                <SkillPercentage>{skill.percentage}%</SkillPercentage>
              </SkillHeader>
              <SkillBar>
                <SkillProgress
                  className="skill-progress"
                  data-width={`${skill.percentage}%`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </SkillBar>
            </SkillItem>
          ))}
        </SkillsContainer>
      </Container>
    </SkillsSection>
  );
};
