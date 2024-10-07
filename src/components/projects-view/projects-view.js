// src/components/projects-view.js

import { useRef, useState, useEffect } from "react"; // import useState

// importing imageUrls for cardData
import heroImage from "../../img/hero.png";
import apiImage from "../../img/api.png";
import pokemonImage from "../../img/pokemon.png";
import chatImage from "../../img/chat2.png";
import meetImage from "../../img/meetup2.png";
import pilatesImage from "../../img/fitpilates.jpg";
import subaruImage from "../../img/subaru.png";

// import icons
import iconHero from "../../img/icon-hero.png";
import iconApi from "../../img/icon-api.png";
import iconPokemon from "../../img/icon-pokemon.png";
import iconChat from "../../img/icon-chat.png";
import iconMeet from "../../img/icon-meet.png";
import iconPilates from "../../img/icon-pilates.png";
import iconSubaru from "../../img/icon-subaru.png";

// import demo
import chatappDemo from "../../img/chatapp.mp4";

const cardData = [
  {
    title: "MARVEL MANIA",
    imageUrl: heroImage,
    description:
      "Welcome to Marvel Mania, a React-based web application that allows you to explore the movies that have created the Marvel Universe. You will be able to view details of your favorite Marvel movies and keep track of your favorites.",
    icon: iconHero,
    liveDemo: "https://mcu-marvel-mania.netlify.app",
    sourceCode: "https://github.com/kayashley/marvel-mania.git",
  },
  {
    title: "API",
    imageUrl: apiImage,
    description:
      'The goal for this project was to build a server-side component of a "movies" web application. The API provides users with access to information about different movies, directors, and genres. Users have the ability to sign up, update their personal information, and create a list of their favorite movies!',
    icon: iconApi,
    liveDemo: "https://mcumarvel-c028170c1f00.herokuapp.com/",
    sourceCode: "https://github.com/kayashley/mcu-marvel-mania-api.git",
  },
  {
    title: "POKÉDEX",
    imageUrl: pokemonImage,
    description:
      "A small web application designed with HTML, CSS, and Javascript that loads data from an external API and allows users to look up details of their favorite Pokémon.",
    icon: iconPokemon,
    liveDemo: "https://pokedex-hub.netlify.app/",
    sourceCode: "https://github.com/kayashley/pokedex.git",
  },
  {
    title: "ChatApp",
    imageUrl: chatImage,
    description:
      "The purpose of this chat app was built for mobile devices to showcase the usage of React Native. The app provides users with a chat interface and options to share images and send their location.",
    icon: iconChat,
    liveDemo: chatappDemo,
    sourceCode: "https://github.com/kayashley/chat-app.git",
  },
  {
    title: "MeetUp App",
    imageUrl: meetImage,
    description:
      "A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. This application utilizes Google's Calendar API to fetch and display upcoming events.",
    icon: iconMeet,
    liveDemo: "https://kayashley.github.io/meet-up/",
    sourceCode: "https://github.com/kayashley/meet-up.git",
  },
  {
    title: "FitPilates",
    imageUrl: pilatesImage,
    description:
      "A Pilates blog site was built using WordPress, incorporating AI-generated content, pages, and plugins to deliver informative articles on Pilates methods and benefits, offering an engaging user experience.",
    icon: iconPilates,
    liveDemo: "https://fitpilates1.wordpress.com/",
    sourceCode: "https://fitpilates1.wordpress.com/",
  },
  {
    title: "Subaru Crosstrek",
    imageUrl: subaruImage,
    description:
      "A Pilates blog site was built using WordPress, incorporating AI-generated content, pages, and plugins to deliver informative articles on Pilates methods and benefits, offering an engaging user experience.",
    icon: iconSubaru,
    liveDemo: "https://subaru-crosstrek.netlify.app/",
    sourceCode: "https://github.com/kayashley/new-dealeron.git",
  },
];

export default function ProjectsView() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const projectRefs = useRef([]);

  // scroll event
  useEffect(() => {
    const handleScroll = () => {
      // loop through each project reference
      projectRefs.current.forEach((ref, index) => {
        // checks if reference exists and if the element is within the viewport
        if (ref && ref.getBoundingClientRect().top < window.innerHeight) {
          // adds classes for animation
          ref.classList.add(index % 2 === 0 ? "slide-left" : "slide-right");
        }
      });
    };

    // adds scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // calls function once page reloads

    // when unmounted removes event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // mouse hover
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  // mouse un-hovers
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section id="projects">
      <div className="projects-container">
        <div className="projects-main">
          <h3 className="projects-header">PROJECTS</h3>
        </div>
        {/* project cards */}
        {cardData.map((card, index) => (
          <section
            className="project-grid"
            key={index}
            ref={(el) => (projectRefs.current[index] = el)} // sets a reference to a DOM element for each project
          >
            <div
              className="project-card"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card-content">
                <img src={card.icon} alt="icon" className="icon" />
                <h1 className="card-header">{card.title}</h1>
                {hoveredIndex === index && (
                  <a href={card.liveDemo}>
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="hover-image"
                    />
                  </a>
                )}
              </div>
            </div>
            <div className="d-card">
              <div className="project-body">
                {card.description}
                <div className="d-container">
                  <a className="d-button" href={card.liveDemo} target="blank">
                    Live Demo
                  </a>
                  <a className="d-button" href={card.sourceCode} target="blank">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
