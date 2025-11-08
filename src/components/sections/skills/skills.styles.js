import { motion } from "framer-motion";
import styled from "styled-components";

export const SkillsSection = styled.section`
  padding: 100px 0;
  position: relative;
  background: var(--secondary);
`;

export const SkillsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const SkillItem = styled(motion.div)`
  background: var(--card-bg);
  border-radius: 15px;
  padding: 30px;
  border: 1px solid var(--border);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

export const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const SkillName = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--highlight);
`;

export const SkillPercentage = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent);
`;

export const SkillBar = styled.div`
  height: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

export const SkillProgress = styled(motion.div)`
  height: 100%;
  background: var(--gradient);
  border-radius: 10px;
  width: 0;
`;
