import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* استيراد الخطوط من Google Fonts */
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&display=swap");

  /* أنماط HTML */
  html {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    letter-spacing: 1px;
    scroll-behavior: smooth;
    box-sizing: border-box;
    @media (max-width: 600px) {
      /* font-size: 10px */
    }
  }

  /* إعادة تعيين CSS */
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    transition: background 0.3s;
    padding: 0;
  }

  /* متغيرات CSS */
  :root {
    --primary: #000;
    --secondary: rgb(24, 24, 27);
    --border: rgba(63, 63, 70, 0.4);
    --title: rgb(244, 244, 245);
    --subtitle: rgb(161, 161, 170);
    --bgHeader: rgb(39, 39, 42);
    --blue: rgb(93, 188, 252);
    --container-padding: 4.8rem;
  }

  /* أنماط الوضع الفاتح */
  .light {
    --primary: rgb(245, 245, 245);
    --secondary: rgb(255, 255, 255);
    --border: rgba(202, 202, 202, 0.5);
    --title: rgb(39, 39, 42);
    --subtitle: rgb(82, 82, 91);
    --bgHeader: rgb(253, 253, 253);
    --blue: rgb(0, 149, 246);
  }

  /* أنماط Body */
  body {
    background-color: var(--primary);
    color: white;
  }

  /* أنماط الحاوية */
  .container {
    border: 2px solid var(--border);
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--secondary);
    padding: 0 var(--container-padding);
  }

  /* أنماط الفاصل */
  .divider {
    border-bottom: 1px solid var(--border);
    margin: 3rem 0;
    width: calc(100% + var(--container-padding) + var(--container-padding));
    margin-left: calc(var(--container-padding) * -1);
  }

  /* أنماط القوائم */
  li {
    list-style: none;
  }

  /* أنماط الروابط */
  a {
    all: unset;
    transition: 0.2s;
  }

  a:hover {
    cursor: pointer;
  }

  /* أنماط Flex */
  .flex {
    display: flex;
    align-items: center;
  }

  /* أنماط الحدود */
  .border {
    border: 2px solid red;
  }

  /* أنماط الأزرار */
  button {
    all: unset;
  }

  button:hover {
    cursor: pointer;
  }

  button:active {
    scale: 0.8;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Media Queries */
  @media (max-width: 1000px) {
    .container {
      --container-padding: 1.7rem;
      width: 90%;
      padding: 0 var(--container-padding);
    }

    .divider {
      width: calc(100% + var(--container-padding) + var(--container-padding));
      margin-left: calc(var(--container-padding) * -1);
    }
  }

  @media (max-width: 600px) {
    .container {
      width: 98%;
      padding: 0 var(--container-padding);
    }

    .scroll2Top {
      opacity: 0.6;
      width: 2.2rem;
      height: 2.2rem;
    }
  }

  /* أنماط Scrollbar */
  ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-track {
    border: 7px solid #292c3b;
    box-shadow: inset 0 0 2.5px rgba(0, 0, 0, 0.5);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  /* أنماط زر Scroll to Top */
  .scroll2Top {
    background-color: rgba(93, 188, 252, 0.8);
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    position: fixed;
    bottom: 2rem;
    right: 3%;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 2rem;
  }

  .scroll2Top:hover {
    background-color: rgb(93, 188, 252);
  }
`;

export default GlobalStyles;
