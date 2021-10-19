import { NavLink } from "react-router-dom";
const Navigation = () => (
  <nav>
    <NavLink exact activeClassName="activeNavLink" className="navLink" to="/">
      Home
    </NavLink>
    <NavLink className="navLink" to="/films" activeClassName="activeNavLink">
      Movies
    </NavLink>
    <hr />
  </nav>
);

export default Navigation;
