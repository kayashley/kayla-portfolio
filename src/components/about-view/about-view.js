// src/components/about-view.js

// import profile from "../../img/portrait.jpg"; // import profile image
import "../../index.css"; // import css

export default function AboutView() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-grid">
          <span className="about-header">
            <h1>KAYLA CHAN</h1>
            <h3>Web Developer</h3>
            <span>
              <h5 className="location-header">
                <em>Boston, MA</em>
              </h5>
            </span>
          </span>

          {/* <img src={profile} className="about-profile" alt="profile-image" /> */}
        </div>

        <div className="about-body">
          <p className="about-content">
            A Web Developer with a background in Biology and Information
            Technology. I aim to transform my ideas into digital solutions,
            applying my skills to code and troubleshoot issues. Whether working
            on the back end or front end, I thrive on transforming abstract
            ideas into fully functional websites and applications.
            <br></br>
            <br></br>
            With a keen eye for detail and a relentless curiosity, I
            continuously seek to expand my knowledge and refine my skills. My
            goal is to develop seamless digital experiences that are as elegant
            as they are effective.
          </p>
        </div>
      </div>
    </section>
  );
}
