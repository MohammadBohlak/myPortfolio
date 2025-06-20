import { useEffect, useState } from "react";
import "./header.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  const timeLine = gsap.timeline();
  useGSAP(() => {
    gsap.from("nav", {
      y: -30,
      duration: 1,
      opacity: 0,
    });

    timeLine.from("li", {
      y: -40,
      opacity: 0,
      stagger: 0.3,
      duration: 1.5,
    });
    gsap.from("button.mode", {
      x: 50,
      opacity: 0,
      delay: 1.5,
    });
  });
  return (
    <header className="flex">
      <button
        className="menu icon-menu flex"
        onClick={() => {
          setShowModal(true);
        }}
      />

      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="#up">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </li>
            <li>
              <a href="#up">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
