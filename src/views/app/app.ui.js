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
      <Link text="Sukh Durhailay" url="https://www.youtube.com/user/sukh5684" />
      {renderedView}
    </div>
  );
};

export default App;
