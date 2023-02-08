import logo from "../../images/lets-eat-logo.jpg";
import { useState } from "react";

const Title = () => {
  return (
    <div className="logo">
      <a href="/">
        <img src={logo} alt="Logo"></img>
      </a>
    </div>
  );
};

const loggedInUser = () => {
  //API call
  return false;
};

//const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="navItems">
        <ul>
          <li> Home </li>
          <li> About </li>
          <li> Contact </li>
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
