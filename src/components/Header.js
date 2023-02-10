import logo from "../../images/lets-eat-logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="logo">
      <a href="/">
        <img src={logo} alt="Logo"></img>
      </a>
    </div>
  );
};

//SPA - Single Page Application- On routing to differnt pages, it is not making a network call

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="navItems">
        <ul>
          <Link to="/" className="link">
            <li> Home </li>
          </Link>
          <Link to="/about" className="link1">
            <li> About </li>
          </Link>
          <Link to="/contact" className="link2">
            <li> Contact </li>
          </Link>
          <li> Cart </li>
        </ul>
      </div>
      {isUserLoggedIn ? (
        <button onClick={() => setIsUserLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsUserLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
