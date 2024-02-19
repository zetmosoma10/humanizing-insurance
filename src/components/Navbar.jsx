import { useState } from "react";
import ButtonLink from "./ButtonLink";

function Navbar() {
  const [toggle, setToggle] = useState(true);
  let toggleClass;
  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  toggle ? (toggleClass = "collapsable-nav") : (toggleClass = null);
  return (
    <nav>
      <a href="/" className="nav__logo">
        <img src="images/logo.svg" alt="logo" />
      </a>
      <div className="toggle-container" onClick={handleToggle}>
        {toggle ? (
          <img className="icon-hamburger" src="images/icon-hamburger.svg" />
        ) : (
          <img className="icon-close" src="images/icon-close.svg" />
        )}
      </div>
      <ul className={`nav__links ${toggleClass}`}>
        <li>
          <a href="#">HOW WE WORK</a>
        </li>
        <li>
          <a href="#">BLOG</a>
        </li>
        <li>
          <a href="#">ACCOUNT</a>
        </li>
        <li>
          <ButtonLink type="nav">view plans</ButtonLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
