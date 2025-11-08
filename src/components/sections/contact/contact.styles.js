import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactSection = styled.section`
  padding: 100px 0;
  position: relative;
  overflow: hidden;
`;

export const ContactBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  .circle {
    position: absolute;
    border-radius: 50%;
    background: var(--gradient);
    opacity: 0.1;

    &:nth-child(1) {
      width: 400px;
      height: 400px;
      top: -200px;
      right: -200px;
      animation: float 15s ease-in-out infinite;
    }

    &:nth-child(2) {
      width: 300px;
      height: 300px;
      bottom: -150px;
      left: -150px;
      animation: float 18s ease-in-out infinite 3s;
    }
  }
`;

export const ContactContainer = styled(motion.div)`
  display: flex;
  gap: 50px;
  align-items: stretch;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ContactInfo = styled(motion.div)`
  flex: 1;
  background: var(--card-bg);
  border-radius: 15px;
  padding: 40px;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContactInfoTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 30px;
  color: var(--highlight);
`;

export const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }

  i {
    font-size: 1.5rem;
    color: var(--accent);
    margin-right: 15px;
    width: 30px;
  }
`;

export const ContactForm = styled(motion.form)`
  flex: 1;
  background: var(--card-bg);
  border-radius: 15px;
  padding: 40px;
  border: 1px solid var(--border);
`;

export const FormGroup = styled.div`
  margin-bottom: 25px;
  position: relative;
`;

export const FormControl = styled.input`
  width: 100%;
  padding: 15px;
  background: rgba(10, 10, 18, 0.5);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--highlight);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(255, 46, 99, 0.2);
  }

  &.textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 15px;
  background: rgba(10, 10, 18, 0.5);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--highlight);
  font-size: 1rem;
  transition: all 0.3s ease;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(255, 46, 99, 0.2);
  }
`;
export const Link = styled.a`
  color: white;
  text-decoration: none;
`;
