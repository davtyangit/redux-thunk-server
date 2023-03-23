import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Redux THUNK</h1>
        <img className="logo-img" src={logo} alt="redux-logo" />
      </div>
      <div className="navlinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add">Add</NavLink>
      </div>
    </nav>
  );
};
