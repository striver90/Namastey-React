import logo from "../../images/lets-eat-logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src={logo}
        alt="Lets Eat Logo "
        title="Lets Eat title"
      ></img>
    </a>
  );
};

//SPA - Single Page Application- On routing to differnt pages, it is not making a network call

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/" className="home">
            <li> Home </li>
          </Link>
          <Link to="/about" className="about">
            <li> About </li>
          </Link>
          <Link to="/contact" className="contact">
            <li> Contact </li>
          </Link>
          <Link to="/instamart" className="instamart">
            <li> Instamart</li>
          </Link>
          <li className="cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {isUserLoggedIn ? (
              <button
                className="logout-btn"
                onClick={() => setIsUserLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button
                className="logout-btn"
                onClick={() => setIsUserLoggedIn(true)}
              >
                Login
              </button>
            )}
          </li>
          <li>{isOnline ? "✅ " : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
