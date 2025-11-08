// src/components/common/SocialLinks.js
import styled from "styled-components";
import { SOCIAL_LINKS } from "../../utils/constants";

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--card-bg);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--gradient);
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: var(--highlight);
    transform: translateY(-5px);
  }
`;

export const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      {SOCIAL_LINKS.map((link, index) => (
        <SocialLink
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={link.icon}></i>
        </SocialLink>
      ))}
    </SocialLinksContainer>
  );
};
