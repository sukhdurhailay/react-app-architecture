import React from "react";
import "./app.css";

import Header from "../../components/header";
import Link from "../../components/link";

import Home from "../home";
import Contact from "../contact";

const App = ({ selectedItem }) => {
  const renderedView = selectedItem === "/" ? <Home /> : <Contact />;

  return (
    <div className="App">
      <Header />
      <Link
        text="The Code Ronin"
        url="https://www.youtube.com/channel/UCMDTY-uyxJDhytMkMrP5fMg"
      />
      {renderedView}
    </div>
  );
};

export default App;
