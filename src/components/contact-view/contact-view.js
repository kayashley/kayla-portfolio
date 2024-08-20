// src/components/contact-view.js

import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import email from "../../img/email.png";

export default function ContactView() {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1>LET'S GET IN TOUCH!</h1>
        </div>
        <div className="contact-main">
          <a className="contact-button" href="mailto:kayashchan@gmail.com">
            Contact Me
          </a>
        </div>

        <div className="">
          {/* linkedin */}
          <a className="" href="www.linkedin.com/in/chan-kay" target="blank">
            <img className="footer-icons" src={linkedin} alt="LinkedIn" />
          </a>
          {/* github */}
          <a className="" href="https://github.com/kayashley" target="blank">
            <img className="footer-icons" src={github} alt="GitHub" />
          </a>
          {/* email */}
          <a className="" href="mailto:kayashchan@gmail.com" target="blank">
            <img className="footer-icons" src={email} alt="Email" />
          </a>
          <div className="footer-container">
            <div className="footer-span">
              <span className="">console.log("© Kayla Chan")</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
