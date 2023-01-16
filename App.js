/***!SECTION
 *
 * HMR- hot module reloading
 * File watchers algorithm - C++
 * Bundling
 * Minify
 * Cleaning our code
 * Dev and Production Build
 * Super fast build alogorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatable with older versions of browser
 * HTTPS on dev
 * Manages the port number
 * Consisting Hashing Algorithm -
 * Zero Config
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/small-logo.png";
//import "./index.css";

// using create element
const conatiner = React.createElement(
  "div",
  {
    class: "title",
  },
  [
    React.createElement("h1", { key: "h1k" }, " Header tag1"),
    React.createElement("h2", { key: "h2k" }, "Header tag2"),
    React.createElement("h2", { key: "h3k" }, " Header tag3"),
  ]
);

// using jsx
const conatiner_jsx = (
  <div className="title">
    <h1> Header tag1 using JSX</h1>
    <h2> Header tag2</h2>
    <h3> Header tag3</h3>
  </div>
);

// using functional component
const FunctionalHeaderComponent = () => {
  return (
    <div className="title">
      <h1> Header tag1 using Functional Component</h1>
      <h2> Header tag2</h2>
      <h3> Header tag3</h3>
    </div>
  );
};
//pass attributes into the tag

const TitleComponent = () => {
  return <div className="title">Title</div>;
};
const H1Component = () => {
  return (
    <h1 className="h1" key="h1Key">
      I am h1 tag
    </h1>
  );
};
const H2Component = () => {
  return (
    <h2 className="h2" key="h2Key">
      I am h2 tag
    </h2>
  );
};
const H3Component = () => {
  return (
    <h3 className="h3" key="h3Key">
      I am h3 tag
    </h3>
  );
};
//Composition of Component
const HeaderCompositionComponent = () => {
  return (
    <div>
      {TitleComponent}{" "}
      {/* Warning in console , saying its a component not a react elememt or Reactobject */}
      <TitleComponent />
      {/* Works correctly as its being called corrrectly i.e <> */}
      <TitleComponent></TitleComponent>
      {/* Works correctly as its being called corrrectly i.e <> */}
      <H1Component />
      <H2Component />
      <H3Component />
    </div>
  );
};

// Header Component
const HeaderComponent = () => {
  return (
    <div className="container" key="contKey">
      <div className="logo" key="logoKey">
        <img src={logo} alt="Logo" key="img_key" />
      </div>

      <div className="search" key="search_key">
        <input type="text" key="search" placeholder="Search for a book" />
      </div>

      <div className="avatar" key="avatar_key">
        <div className="user-icon" key="user-icon"></div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//task1
//root.render(conatiner);
//task2
//root.render(conatiner_jsx)
//task3
//root.render(<FunctionalHeaderComponent/>)
//task4
//root.render(<HeaderCompositionComponent/>)
//task5
root.render(<HeaderComponent />);

