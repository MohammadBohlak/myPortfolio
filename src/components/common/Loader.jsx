// src/components/common/Loader.js
import { useEffect, useState } from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  transition: opacity 0.5s ease, visibility 0.5s ease;

  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
`;

const LoaderCircle = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
`;

export const Loader = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoaderContainer className={isHidden ? "hidden" : ""}>
      <LoaderCircle />
    </LoaderContainer>
  );
};
