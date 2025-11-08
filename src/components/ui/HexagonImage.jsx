// src/components/ui/HexagonImage.js
import styled from "styled-components";

const HexagonContainer = styled.div`
  width: 350px;
  height: 350px;
  position: relative;
  margin: 50px auto;
  animation: float 6s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 576px) {
    width: 200px;
    height: 200px;
  }
`;

const HexagonInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  /* transform: rotate(30deg); */
  transform: rotate(45deg);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(255, 46, 99, 0.5);
`;

const HexagonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: rotate(-45deg) scale(1.2);
  /* transform: rotate(-45deg) scale(1.2); */
  /* background-color: aliceblue; */
  /* background-color: var(--accent); */
  background-color: #ff2e6258;
`;

export const HexagonImageComponent = ({ src, alt }) => {
  return (
    <HexagonContainer>
      <HexagonInner>
        <HexagonImage src={src} alt={alt} />
      </HexagonInner>
    </HexagonContainer>
  );
};
