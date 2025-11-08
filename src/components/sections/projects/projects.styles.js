import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectsSection = styled.section`
  padding: 100px 0;
  position: relative;
`;

export const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
