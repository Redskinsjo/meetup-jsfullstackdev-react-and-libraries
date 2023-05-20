import logo from "./logo.svg";
import "./App.css";
import React, { createElement, useMemo, useState } from "react";

function LittleComponent({ inputName, bg }) {
  return (
    <div className="input" style={{ backgroundColor: bg }}>
      <label htmlFor={inputName}>{inputName}</label>
      <input id={inputName} />
    </div>
  );
}

const inputs = [
  {
    inputName: "Firstname",
    bg: "#F00",
  },
  {
    inputName: "Lastname",
    bg: "#0F0",
  },
  {
    inputName: "Fullname",
    bg: "#00F",
  },
];

function App() {
  const [index, setIndex] = useState(0);

  console.log(index);

  const memoComponent = useMemo(() => {
    return createElement(LittleComponent, {
      inputName: inputs[index].inputName,
      bg: inputs[index].bg,
    });
  }, [index]);

  return (
    <div>
      <button
        disabled={index + 1 >= inputs.length}
        onClick={() => {
          setIndex((state) => state + 1);
        }}
      >
        Next
      </button>
      {memoComponent}
    </div>
  );
}

export default App;
