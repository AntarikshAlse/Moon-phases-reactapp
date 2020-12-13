import React from "react";
import { useState } from "react";
import "./styles.css";

const MoonPhase = {
  "🌑": "New Moon",
  "🌒": "Waxing Cresant",
  "🌓": "First Quarter",
  "🌔": "Waxing Gibbous",
  "🌕": "Full Moon",
  "🌖": "Waning Gibbous",
  "🌗": "Third Quarter",
  "🌘": "Waning Gibbous"
};
var kyz = Object.keys(MoonPhase);

export default function App() {
  var [show, setshow] = useState(" ");
  var [key, setkey] = useState("");
  var [value, setvalue] = useState("");
  var [mean, setmean] = useState(""); //to Display input usestate sepreatly.
  function inputkeys(input) {
    show = input.target.value;
    setshow(show);
    // Statement to check and show the meaning
    // use the conditional and copy the same code in other function
    if (show in MoonPhase) {
      setmean(MoonPhase[show]);
    } else {
      setmean(<p style={{ color: "#ff9b93" }}>"please input correct keys"</p>);
    }
  }

  function keysclickhandler(keys) {
    console.log(keys);
    key = keys;
    // to show meaning from array
    setkey(key);
    setvalue(MoonPhase[keys]);
  }

  return (
    <div className="App">
      <h1>Phases of the moon</h1>
      <input
        id="search"
        placeholder="Search for emojis"
        onChange={inputkeys}
        style={{
          borderRadius: "8px",
          border: 0,
          padding: ".8rem",
          width: "80%"
        }}
      />
      <h3>
        {show}:{mean}
      </h3>
      <h3 style={{ fontSize: "2rem", color: "dodgerblue" }}>--------</h3>
      <p>
        {kyz.map((keys) => {
          return (
            <span
              onClick={() => keysclickhandler(keys)}
              style={{
                padding: ".5em",
                cursor: "pointer",
                color: "blueviolet",
                fontSize: "1.5rem"
              }}
            >
              {keys}
            </span>
          );
        })}
      </p>
      <h2>Click the above keys to know the meaning.</h2>
      <h3>
        {key}:<span>{value}</span>
      </h3>
    </div>
  );
}
