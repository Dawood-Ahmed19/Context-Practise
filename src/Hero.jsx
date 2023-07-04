import React, { useContext, useEffect } from "react";
import textContext from "./context/textContext";

const Hero = () => {
  const b = useContext(textContext);

  useEffect(() => {
    b.update();
  }, []);

  return (
    <div>
      Hello, My name is {b.state.Name} and I am {b.state.Age}
    </div>
  );
};

export default Hero;
