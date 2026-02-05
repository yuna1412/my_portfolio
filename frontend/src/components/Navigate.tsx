import { NavLink } from "react-router-dom";

export default function Navigate() {
  return (
    <nav className="navigate">
      <ol className="navigateList">
        <li className="navigateList__item --active">
          <NavLink to="/" className="navigateList__itemText">Top</NavLink>
        </li>
        <li className="navigateList__item">
          <NavLink to="/projects" className="navigateList__itemText">Projects</NavLink>
        </li>
        <li className="navigateList__item">
          <NavLink to="/Log" className="navigateList__itemText">Log</NavLink>
        </li>
        <li className="navigateList__item">
          <NavLink to="/Profile" className="navigateList__itemText">Profile</NavLink>
        </li>
      </ol>
    </nav>
  );
}
