import { NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import "./Header.scss";

export function Header() {
  return (
    <header className="header-app">
      <div className="wrapper-menu-mobile">
        <Menu id={"sidebar"} className={"side-menu-mobile"} burgerButtonClassName={"button-menu-mobile"}>
          <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/">Home</NavLink>
          <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/profile" />
        </Menu>
      </div>
      <div className="wrapper-menu-pc">
        <ul>
          <li>
            <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/user">user</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}