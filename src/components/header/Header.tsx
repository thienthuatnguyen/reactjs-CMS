import { NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import "./Header.scss";
import logo from "../../assets/images/logo-pc.png";
import logoMobile from "../../assets/images/logo-mobi.png";

import { Button, Popover } from "@material-ui/core";
import React from "react";
export function Header() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <header className="header-app">
      <div className="wrapper-menu-mobile">
        <div className="container-app">
          <div className="logo">
            <a href="/ho-so-benh-nhan">
              <img alt="logo" src={logoMobile}></img>
            </a>
          </div>
          <Menu id={"sidebar"} className={"side-menu-mobile"} burgerButtonClassName={"button-menu-mobile"}>
            <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/ho-so-benh-nhan">Hồ sơ bệnh nhân</NavLink>
            <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/dat-lich-kham">Đặt lịch khám</NavLink>
            <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/benh-vien">Bệnh viện</NavLink>
            <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/bac-si-vn">Bác sĩ VN</NavLink>
            <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/bac-si-singapore">Bác sĩ Singapore</NavLink>
            <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/tam-nhin-su-menh">Tầm nhìn sứ mệnh</NavLink>
            <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/doi-tac">Đối tác</NavLink>
            <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/lien-he">Liên hệ</NavLink>
            <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/tai-ung-dung">Tải ứng dụng</NavLink>

          </Menu>
        </div>
      </div>
      <div className="wrapper-menu-pc">
        <div className="container-app">
          <div className="logo">
            <a href="/ho-so-benh-nhan">
              <img alt="logo" src={logo}></img>
            </a>

          </div>
          <div className="right-content">
            <ul className="menu-pc">
              <li>
                <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/ho-so-benh-nhan">Hồ sơ bệnh nhân</NavLink>
              </li>
              <li>
                <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/dat-lich-kham">Đặt lịch khám</NavLink>
              </li>
              
              <li>
                <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/benh-vien">Bệnh viện</NavLink>
              </li>
              {/* <li>
                <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/bac-si-vn">Bác sĩ VN</NavLink>
              </li>
              <li>
                <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/bac-si-singapore">Bác sĩ Singapore</NavLink>
              </li> */}
              <li>
                <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/tam-nhin-su-menh">Tầm nhìn sứ mệnh</NavLink>
              </li>
              <li>
                <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/doi-tac">Đối tác</NavLink>
              </li>
              <li>
                <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/lien-he">Liên hệ</NavLink>
              </li>
              <li>
                <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/tai-ung-dung">Tải ứng dụng</NavLink>
              </li>
            </ul>
            <div className="user-account">
              <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <div className="content-dropdown-account">
                  <div className="user-name">Thuat Nguyen</div>
                  <button type="button" className="btn-logout">Log Out</button>
                </div>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}