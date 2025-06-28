import { BsFillArrowUpCircleFill } from "react-icons/bs";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import { GlobalStyles } from "./styles/GlobalStyles";
import Hero from "./pages/hero/Hero";
import Main from "./pages/main/Main";
import Contact from "./pages/contact/Contact";
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 20px 60px;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.line};
  border-top-color: transparent;
  border-bottom-color: transparent;
  @media (max-width: 992px) {
    padding: 20px 30px;
  }
  @media (max-width: 650px) {
    padding: 20px 10px;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.line};
`;

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);

  const [showScrollBtn, setShowScrollBtn] = useState(false);
  return (
    <>
      <Container>
        <div id="up"></div>

        <GlobalStyles />
        <Navbar />
        <Hero />
      </Container>
      <Line />
      <Container>
        <Main />
      </Container>
      <Line />
      <Container>
        <Contact />
        <a
          href="#up"
          style={{ transition: "0.3s", opacity: showScrollBtn ? 1 : 0 }}
        >
          <BsFillArrowUpCircleFill className="scroll2Top" />{" "}
        </a>
      </Container>
    </>
  );
}

export default App;
