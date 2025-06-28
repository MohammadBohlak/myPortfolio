import styled from "styled-components";

export const Title = styled.h2`
  font-size: var(--big-text);
  font-weight: bold;
  color: ${({ theme }) => theme.color};
`;
export const StyledHero = styled.section`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    align-items: center;
    row-gap: 40px;
    & > div {
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;
export const LeftHero = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 40px;
  justify-content: center;
`;
export const SubTitle = styled.p`
  font-size: var(--small-text);
  color: ${({ theme }) => theme.subTitle};
  white-space: 1px;
  letter-spacing: 1.5px;
  line-height: 200%;
`;
export const Icons = styled.div`
  display: flex;
  gap: 20px;
  font-size: var(--big-text);
  a svg {
    transition: scale 0.3s ease;
  }
  a:hover svg {
    scale: 1.1;
  }
  a.telegram {
    color: #0088cc;
  }
  a.facebook {
    color: #1877f2;
  }
  a.whatsapp {
    color: #25d366;
  }
  a.linkedin {
    color: #0a66c2;
  }
`;
export const RightHero = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
`;
export const Image = styled.div`
  width: 70%;
  background-color: transparent;
  img {
    background-color: transparent;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  @media (max-width: 992px) {
    width: 50%;
  }
  @media (max-width: 650px) {
    width: 65%;
  }
`;
export const CVBtn = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 992px) {
    order: -1;
    margin-top: 0;
  }
  a {
    text-decoration: none;
    box-sizing: border-box;
    padding: 14px 22px;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    border: 1px solid ${({ theme }) => theme.color};
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: height 0.3s ease;
    border-radius: 24px;
    display: flex;
    align-items: center;
    gap: 5px;
    position: relative;
    overflow: hidden;
    span {
      transform: translateX(16px);
      transition: transform 0.3s ease;
      color: inherit;
      text-decoration: none;
    }
    svg {
      font-size: 22px;
      transition: all 0.6s ease;
      opacity: 0;
      transform: translateY(-40px);
    }
    svg,
    span {
      z-index: 10;
    }
  }
  a:hover {
    color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.color};
  }
  a:hover span {
    transform: translateX(0);
  }
  a:hover svg {
    opacity: 1;
    transform: translateY(0px);
  }
  a:hover::before {
    height: 100%;
  }
  a::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 0%;
    border-radius: 24px;
    z-index: 0;
    background-color: ${({ theme }) => theme.color} !important;
    transition: height 0.3s ease;
  }
`;
