import React from "react";
import ImageUploader from "./components/ImageUploader";
import Wizard from "./components/Wizard";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <header className="app-main">
        <h1>AWS Developer Certification Training</h1>
        <ImageUploader />
        <Wizard />
      </header>
    </div>
  );
}

export default App;
