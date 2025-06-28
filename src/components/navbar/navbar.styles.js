import styled from "styled-components";

export const ContainerNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Nav = styled.ul`
  list-style: none;
  background-color: ${({ theme }) => theme.backgroundLight};
  padding: 10px 20px;
  border-radius: 90px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 250px;
  box-shadow: 0px 0px 40px #2323242a;
  margin: auto;
  z-index: 10;
  .close-btn {
    display: none;
  }
  @media (max-width: 768px) {
    padding: 0;
    position: fixed;
    top: 0;
    left: -100%;
    height: 250px;
    width: 200px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    transition: left 0.3s ease-in-out;
    .close-btn {
      position: absolute;
      right: 10px;
      top: 10px;
      display: block;
      font-size: 24px;
      cursor: pointer;
      color: ${({ theme }) => theme.color};
      opacity: 1;
    }
    &.open {
      left: 0;
    }
  }
`;

export const NavItem = styled.li`
  font-size: var(--small-text);

  cursor: pointer;
  &:hover a {
    color: #007bff;
    scale: 1.1;
  }
  a {
    transition: color 0.3s, scale 0.3s;

    text-decoration: none;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    display: block;
    width: 100%;
    position: relative;
    /* z-index: 100; */
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    position: relative;
    margin-top: 5px;
    &:hover {
      scale: 1;
      color: #007bff;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #ccc;
      padding: 0;
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.color};

  @media (max-width: 768px) {
    display: block;
    z-index: 1;
  }
`;
