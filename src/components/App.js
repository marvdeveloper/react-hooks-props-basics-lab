import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About
        bio={user.bio}
        image={user.image} // if you add image in your user object
        github={user.links.github} // Accessing github link
        linkedin={user.links.linkedin} // Accessing linkedin link
      />
    </div>
  );
}

export default App;
