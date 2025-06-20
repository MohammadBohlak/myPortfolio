import styled from "styled-components";

export const StyledMain = styled.main``;

export const Buttons = styled.section`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  button {
    background-color: #919296;
    width: 180px;
    padding: 0.7rem 0;
    text-align: center;
    font-size: 1.05rem;
    transition: background 0.3s;
    border-radius: 8px;
    @media (max-width: 920px) {
      width: 140px;
      font-size: 0.8rem;
    }

    &:hover {
      opacity: 1;
    }
    &.active {
      /* opacity: 1; */
      background-color: #24252e;

      font-weight: bold;
      letter-spacing: 0.6px;
      padding: 0.8rem 0;
      border: 1px solid var(--blue);
    }
  }
`;
export const StyledProjectsSection = styled.section`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ProjectCard = styled.div`
  border: 1px solid rgba(93, 188, 252, 0.3);
  transition: 0.3s;
  border-radius: 8px;
  width: 300px;
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.015), rgba(255, 255, 255, 0.05));
  &:hover {
    border: 1px solid var(--blue);
    rotate: 1deg;
    scale: 1.01;
    /* cursor: pointer; */
  }
  .image {
    width: 100%;
    box-shadow: 1px 0 10px rgba(0, 0, 0, 0.2);
  }
  img {
    max-width: 100%;
  }
  .box {
    padding: 1rem;
  }
  .box .title {
    color: var(--title);
  }
  .box .sub-title {
    color: var(--subtitle);
    font-size: 0.8rem;
    margin-top: 0.7rem;
    margin-bottom: 1.1rem;
  }
  .box .icons {
    justify-content: space-between;
  }
  .box .icons svg {
    /* color: blue; */
    color: var(--subtitle);
    font-size: 1.2rem;
    cursor: pointer;
    margin-left: 1px;
  }
  .icon-link {
    font-size: 1.2rem;
    color: var(--subtitle);
  }

  .icon-link:hover {
    font-size: 1.3rem;
    color: var(--blue);
    cursor: pointer;
  }

  a.link {
    font-size: 0.9rem;
    color: var(--blue);
    margin-right: 12px;
  }
`;
