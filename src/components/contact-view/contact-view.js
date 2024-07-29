// src/components/contact-view.js

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
          <a
            className=""
            href="https://www.linkedin.com/in/chan-kay/"
            target="blank"
          >
            <img
              className="footer-icons"
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
              alt="LinkedIn"
            />
          </a>
          {/* github */}
          <a className="" href="https://github.com/kayashley" target="blank">
            <img
              className="footer-icons"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
            />
          </a>
          {/* email */}
          <a className="" href="mailto:kayashchan@gmail.com" target="blank">
            <img
              className="footer-icons"
              src="https://static-00.iconduck.com/assets.00/email-icon-1024x1024-7l3hfh11.png"
              alt="Email"
            />
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
