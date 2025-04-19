import React from "react";
import Links from "./Links"; // Import the Links component

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && <p>{props.bio}</p>} {/* Conditionally render bio */}
      <img src={props.image} alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} /> {/* Pass props */}
    </div>
  );
}

export default About;
