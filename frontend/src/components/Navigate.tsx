import { NavLink } from "react-router-dom";

export default function Navigate() {
  return (
    <nav className="navigate">
      <ol className="navigateList">
        <li className="navigateList__item">
          <NavLink to="/" className={({ isActive }) =>
              `navigateList__itemLink ${isActive ? "--active" : ""}`
            }>Top</NavLink>
        </li>
        <li className="navigateList__item">
          <NavLink to="/projects" className={({ isActive }) =>
              `navigateList__itemLink ${isActive ? "--active" : ""}`
            }>Projects</NavLink>
        </li>
        <li className="navigateList__item">
          <NavLink to="/log" className={({ isActive }) =>
              `navigateList__itemLink ${isActive ? "--active" : ""}`
            }>Log</NavLink>
        </li>
        <li className="navigateList__item">
          <NavLink to="/profile" className={({ isActive }) =>
              `navigateList__itemLink ${isActive ? "--active" : ""}`
            }>Profile</NavLink>
        </li>
      </ol>
    </nav>
  );
}
