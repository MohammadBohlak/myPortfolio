import { motion } from "framer-motion";
import styled from "styled-components";

export const SectionSubtitle = styled(motion.p)`
  margin-bottom: 50px;
  color: var(--text);
  /* max-width: 700px; */
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 992px) {
    text-align: center;
  }
`;
