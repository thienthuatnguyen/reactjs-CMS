import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header>
      <ul>
        <li>
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/profile" />
        </li>
      </ul>
    </header>
  )
}