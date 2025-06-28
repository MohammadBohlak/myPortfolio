import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background 0.3s ease , color 0.3s ease
  }
  html{
    font-family: 'Huninn', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 10px;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
   .scroll2Top {
    color: rgba(93, 188, 252, 0.8);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    position: fixed;
    bottom: 3rem;
    right: 3%;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 2.5rem;
  }
 @media (max-width: 600px) {
  .scroll2Top {
      opacity: 0.6;
      width: 38px;
      height: 38px;
    }
 }
  .scroll2Top:hover {
    color: rgb(93, 188, 252);
  }
 body{
  background-color: ${({ theme }) => theme.sideBackground};
  padding: 0px 40px;
  @media (max-width: 992px) {
    padding: 0px 20px;
  }
  @media (max-width: 650px) {
    padding: 0px 10px;
  }
 }
  :root{
    --big-text: 3rem ; 
    --normal-text: 2.4rem; 
    --small-text: 16px; 
    @media (max-width: 768px){
      --big-text: 2rem ; 
      --normal-text: 1.6rem; 
      --small-text: 14px; 
      
    }
    @media (min-width: 769px) and (max-width: 992px){
      --big-text: 2.4rem ; 
      --normal-text: 1.8rem; 
      --small-text: 14px; 

    }

  }
`;
