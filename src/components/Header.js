import logo from "../../images/lets-eat-logo.jpg";

const Title = () => {
  return (
    <div className="logo">
      <a href="/">
        <img src={logo} alt="Logo"></img>
      </a>
    </div>
  );
};

const Header = () => {
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
    </div>
  );
};

export default Header;
