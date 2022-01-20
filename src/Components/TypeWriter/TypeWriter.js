import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Competitive Coder !!!",
          "MERN Stack Developer !!!",
          "Data Scientist !!!",
          "Quick Learner !!!",
          "Team Player !!!",
          "Problem Solver !!!",
          "Creative !!!",
          "Self Motivated !!!",
          "Hard Worker !!!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default TypeWriter;