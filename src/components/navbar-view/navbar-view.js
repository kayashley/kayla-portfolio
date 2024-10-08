// src/components/navbar-view.js

// import icon from "../../img/icon.png"; // icon

export default function NavbarView() {
  return (
    <nav className="navbar-container">
      <div className="icon-container">
        {/* <img className="icon" src={icon} alt="icon" /> */}
      </div>

      <ul className="navbar-content">
        <li>
          <a className="nav-links" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav-links" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a
            className="nav-links"
            href="https://drive.google.com/file/d/1PuxqpgrczbOw9L_eAhqCv191ZjhoP5l5/view?usp=sharing"
            download
          >
            Resume
          </a>
        </li>
        <li>
          <a className="nav-links" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
