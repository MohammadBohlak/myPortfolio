import { Link } from "react-scroll";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="flex">
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

      <p>©2025 Mohammad Bohlak. All right reserved.</p>
    </footer>
  );
};

export default Footer;
