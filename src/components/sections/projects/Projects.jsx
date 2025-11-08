// src/components/sections/Projects.js
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Container } from "../../common/Container";
import { ProjectCard } from "../../project/ProjectCard";
import { ProjectFilter } from "../../project/ProjectFilter";
import { PROJECTS_DATA } from "../../../utils/constants";
import { SectionTitle } from "../../common/sectionTitle";
import { ProjectsGrid, ProjectsSection } from "./projects.styles";
import { SectionSubtitle } from "../../common/SectionSubtitle";

export const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === filter);

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
    viewport: { once: true },
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Some of my featured projects that I've worked on with pride and
          attention
        </SectionSubtitle>

        <ProjectFilter filter={filter} setFilter={setFilter} />

        <ProjectsGrid
          key={filter}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variants={itemVariants}
            />
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};
