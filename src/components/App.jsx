import React, { useState } from "react";

function App() {
  const [isHeadingText, setHeadingText] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);
  const [isFullName, setFullName] = useState({
    fname: "",
    lname: ""
  });

  function InputChange(event) {
    const elementName = event.target.name;
    const elementValue = event.target.value;

    setFullName(prevValue => {
      if (elementName === "fname") {
        return {
          fname: elementValue,
          lname: prevValue.lname
        };
      } else if (elementName === "lname") {
        return { fname: prevValue.fname, lname: elementValue };
      }
    });
  }

  function handleClick() {
    setHeadingText(isFullName);
  }

  function hoverstate() {
    setMouseOver(true);
  }

  function hoverout() {
    setMouseOver(false);
  }
  //if you need ontime changes as with par with typing then just use isCurrentText in h1
  return (
    <div className="container">
      <h1>
        Hello {isFullName.fname} {isFullName.lname}
      </h1>
      <input
        name="fname"
        onChange={InputChange}
        type="text"
        placeholder="First name"
      />
      <input
        name="lname"
        onChange={InputChange}
        type="text"
        placeholder="Last name"
      />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOut={hoverout}
        onMouseOver={hoverstate}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
