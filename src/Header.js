import { NavLink } from "react-router-dom";
import logo from './assets/rp-logo.png';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="RP Logo" />
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/diplomas">Diplomas</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </header>
  );
}
