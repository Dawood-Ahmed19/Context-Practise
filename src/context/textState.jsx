import TextContext from "./textContext";
import { useState } from "react";

const textState = (props) => {
  const Obj = {
    Name: "Dawood",
    Age: "18",
  };

  const [state, setState] = useState(Obj);
  const update = () => {
    setTimeout(() => {
      setState({
        Name: "Dawood Ahmed Waqar",
        Age: "19 y/o",
      });
    }, 1000);
  };

  return (
    <TextContext.Provider value={{ state, update }}>
      {props.children}
    </TextContext.Provider>
  );
};

export default textState;
