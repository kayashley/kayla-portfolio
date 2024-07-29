import React from "react"; // import react
import "./index.css"; // import css

// importing components
import NavBarView from "./components/navbar-view/navbar-view.js";
import AboutView from "./components/about-view/about-view.js";
import ProjectsView from "./components/projects-view/projects-view.js";
import ContactView from "./components/contact-view/contact-view.js";

import "./index.css"; // importing css

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBarView />
      <AboutView />
      <ProjectsView />

      <ContactView />
    </main>
  );
}
