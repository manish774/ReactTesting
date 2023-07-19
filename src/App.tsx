import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const showDialogRef = useRef(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Manish</p>

        <button onClick={() => setDialogOpen(true)}>Open Dialog</button>
        <dialog open={dialogOpen}>
          <p>Greetings, one and all!</p>
          <form method="dialog">
            <button onClick={() => setDialogOpen(false)}>OK</button>
          </form>
        </dialog>
      </header>
    </div>
  );
}

export default App;
