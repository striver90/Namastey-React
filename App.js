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

const heading = React.createElement(
  "h1",
  {
    className: "test",
    id: "h2",
    key: "k1",
    style: {
      color: "blue",
      textAlign: "center",
    },
  },
  " Namastey Everyone"
);

const heading2 = React.createElement(
  "h2",
  {
    key: "p1",
    style: {
      textAlign: "center",
      fontSize: "1.5rem",
    },
  },
  "from parcel"
);

console.log("heading-->>", heading);

const conatiner = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(conatiner);
