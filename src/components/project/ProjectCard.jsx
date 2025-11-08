// src/components/project/ProjectCard.js
import { motion } from "framer-motion";
import styled from "styled-components";

const ProjectCardContainer = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    transform: translateY(-10px) rotateX(5deg);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImg = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }

  ${ProjectCardContainer}:hover & img {
    transform: scale(1.1) rotate(2deg);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 18, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;

  ${ProjectCardContainer}:hover & {
    opacity: 1;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--highlight);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--highlight);
    color: var(--accent);
    transform: scale(1.1) rotate(360deg);
  }
`;

const ProjectContent = styled.div`
  padding: 25px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--highlight);
`;

const ProjectDescription = styled.p`
  margin-bottom: 20px;
  color: var(--text);
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ProjectTag = styled.span`
  padding: 5px 15px;
  background: rgba(255, 46, 99, 0.1);
  border: 1px solid var(--border);
  border-radius: 50px;
  font-size: 0.9rem;
  color: var(--accent);
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent);
    color: var(--highlight);
    transform: translateY(-3px);
  }
`;

export const ProjectCard = ({ project, variants }) => {
  return (
    <ProjectCardContainer
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="stagger-animation"
    >
      <ProjectImg>
        <img src={`${project.image}`} alt={project.title} />
        <ProjectOverlay>
          <ProjectLinks>
            <ProjectLink
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </ProjectLink>
            <ProjectLink
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>
            </ProjectLink>
          </ProjectLinks>
        </ProjectOverlay>
      </ProjectImg>
      <ProjectContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectTags>
          {project.tags.map((tag, index) => (
            <ProjectTag key={index}>{tag}</ProjectTag>
          ))}
        </ProjectTags>
      </ProjectContent>
    </ProjectCardContainer>
  );
};
