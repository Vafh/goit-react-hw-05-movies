import { NavLink } from "react-router-dom";
import { NavigationStyles } from "./NavigationStyles";
const Navigation = () => (
  <NavigationStyles>
    <NavLink exact activeClassName="activeNavLink" className="navLink" to="/">
      Home
    </NavLink>
    <NavLink className="navLink" to="/films" activeClassName="activeNavLink">
      Movies
    </NavLink>
  </NavigationStyles>
);

export default Navigation;
