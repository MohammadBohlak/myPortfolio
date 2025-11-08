// src/components/common/Button.js
import styled from "styled-components";

export const Button = styled.a`
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;

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

  &.btn-primary {
    background: var(--accent);
    color: var(--highlight);
    border: 2px solid var(--accent);
  }

  &.btn-primary:hover {
    color: var(--highlight);
  }

  &.btn-outline {
    background: transparent;
    color: var(--highlight);
    border: 2px solid var(--accent);
  }

  &.btn-outline:hover {
    color: var(--highlight);
  }

  &.submit-btn {
    background: var(--gradient);
    color: var(--highlight);
    border: none;
    padding: 15px 30px;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: var(--primary);
      transition: all 0.3s ease;
      z-index: -1;
    }

    &:hover::before {
      width: 100%;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(255, 46, 99, 0.3);
    }
  }
`;
