import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import React, { useEffect } from "react";
import { useTheme } from "../styles/ThemeContext";
import styled from "styled-components";

const ThemeBtn = styled.div`
  button {
    /* padding: 10px; */
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 0px 0px 10px -4px ${({ theme }) => theme.subTitle};
    -webkit-box-shadow: 0px 0px 10px -4px ${({ theme }) => theme.subTitle};
    -moz-box-shadow: 0px 0px 10px -4px ${({ theme }) => theme.subTitle};
    cursor: pointer;
    aspect-ratio: 1/1;
    background-color: transparent;
    border-radius: 50%;
    border: 0.5px solid ${({ theme }) => theme.subTitle};
    svg {
      color: ${({ theme }) => theme.color};
      font-size: 25px;
    }
  }
`;
const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <ThemeBtn className="toggle-theme">
      <button onClick={toggleTheme}>
        {theme == "light" ? <CiLight /> : <MdOutlineDarkMode />}
      </button>
    </ThemeBtn>
  );
};

export default ToggleTheme;
