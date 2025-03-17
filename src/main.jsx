import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  return(
  <button onClick={props.onClick}>
    {props.children}
  </button>
  )
  
};

const Application = () => {

  // your code here
  const [name, setName] = useState("Saurav");
  const reset = () => {
    console.log("reset");
    // your code here
    setName("");
  };

  return (
    <main>
      {/* your code here -- this entire line including the curly braces can be removed */}
      <input 
        value={name}
        placeholder='TYPE YOUR NAME'
        onChange={(event) => setName(event.target.value)}></input>
      <Button onClick={reset}>RESET</Button>
      {name ? <h1>Hello {name}</h1> : ""}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
