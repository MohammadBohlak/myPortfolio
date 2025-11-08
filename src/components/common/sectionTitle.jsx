import { motion } from "framer-motion";
import styled from "styled-components";

export const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 30px;
  color: var(--highlight);
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent);
  }

  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;
