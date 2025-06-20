import styled from "styled-components";

export const StyledHero = styled.section`
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
  @media (max-width: 850px) {
    flex-direction: column-reverse;
    row-gap: 30px;
    text-align: center;
    .hero {
      width: 100%;
      .image {
        width: 50%;
      }
    }
  }
`;
export const Title = styled.h2`
  font-size: 2rem;
  line-height: 3.3rem;
  /* opacity: 1; */
  color: var(--title);
  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;
export const LeftHero = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 30px;
  h2.title {
    font-size: 2rem;
    line-height: 3.3rem;
    opacity: 1;
    color: var(--title);
  }
  .sub-title {
    color: var(--subtitle);
    font-size: 0.9rem;
    line-height: 1.65rem;
  }

  .all-icons {
    font-size: 1.8rem;
    gap: 1.5rem;
    /* translate: 0 -10px; */
  }
  .all-icons a {
    opacity: 1;
  }
  .all-icons svg {
    transition: 0.3s;
  }
  .all-icons svg:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;
export const RightHero = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
  @media (max-width: 850px) {
    justify-content: center;
  }
  .image {
    display: flex;
    justify-content: center;
    width: 70%;
    @media (max-width: 450px) {
      width: 80% !important;
    }

    img {
      max-width: 100%;
      /* background: transparent; */
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 0 29px inset gray;
    }
  }
`;
