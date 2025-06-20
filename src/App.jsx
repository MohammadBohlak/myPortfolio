import { useEffect, useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import GlobalStyles from "./GlobalStyles";

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
      <GlobalStyles />
      <div id="up" className="container">
        <Header />

        <Hero />
        <div className="divider" id="projects" />
        <Main />
        <div className="divider" id="contact" />
        <Contact />
        <div className="divider" />
        <Footer />

        <a
          href="#up"
          style={{ transition: "0.3s", opacity: showScrollBtn ? 1 : 0 }}
        >
          <button className="scroll2Top icon-keyboard_arrow_up"></button>
        </a>
      </div>
    </>
  );
}

export default App;
