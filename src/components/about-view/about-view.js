// src/components/about-view.js

import profile from "../../img/portrait.jpg"; // import profile image
import "../../index.css"; // import css

export default function AboutView() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-grid">
          <span className="about-header">
            <span className="about-header-v1">Hello World,</span>
            <br />
            <div className="header-indent1">
              <span className="about-header-v1">I'm </span>
              <span className="about-header-v2">Kayla Chan</span>
              <br />
              <div className="header-indent2">
                <span className="about-header-v1">an </span>
                <span className="about-header-v3">aspiring Web Developer!</span>
              </div>
            </div>
          </span>

          <img src={profile} className="about-profile" alt="profile-image" />
        </div>

        <div className="about-body">
          <p className="about-content">
            An aspiring web developer with a background in Biology and
            Information Technology. I have provided strong and engaging customer
            service to a large client base, assisting over 80 companies and
            resolving numerous challenges with effective problem-solving
            methods. With a creative and curious mindset, I aim to transform my
            ideas into websites and applications, applying my troubleshooting
            skills to code and other issues. Developing websites and
            applications from the back end to the front end has enhanced my
            understanding of application structures.
          </p>
        </div>
      </div>
    </section>
  );
}
