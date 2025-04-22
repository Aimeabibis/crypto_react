import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Tableau from "./Components/Tableau";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <section>
        <Hero />
      </section>
      <div>
        <Tableau />
      </div>
    </div>
  );
};

export default App;
