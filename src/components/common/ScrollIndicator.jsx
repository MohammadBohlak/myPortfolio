// src/components/common/ScrollIndicator.js
import { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollIndicatorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1001;
`;

const ScrollProgress = styled.div`
  height: 100%;
  background: var(--gradient);
  width: 0;
  transition: width 0.3s ease;
`;

export const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollIndicatorContainer>
      <ScrollProgress style={{ width: `${scrollPercentage}%` }} />
    </ScrollIndicatorContainer>
  );
};
