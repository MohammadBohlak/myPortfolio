// src/components/skill/SkillItem.js
import { motion } from "framer-motion";
import styled from "styled-components";

const SkillItemContainer = styled(motion.div)`
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

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const SkillName = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--highlight);
`;

const SkillPercentage = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent);
`;

const SkillBar = styled.div`
  height: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const SkillProgress = styled(motion.div)`
  height: 100%;
  background: var(--gradient);
  border-radius: 10px;
  width: 0;
`;

export const SkillItem = ({ skill, variants }) => {
  return (
    <SkillItemContainer variants={variants} className="stagger-animation">
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
    </SkillItemContainer>
  );
};
