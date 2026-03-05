import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import menus from "../menus";

class Header extends Component {
  state = { isDark: false };

  componentDidMount() {
    const saved = localStorage.getItem("theme") || "light";
    const isDark = saved === "dark";
    this.setTheme(isDark);
  }

  setTheme = (isDark) => {
    this.setState({ isDark });
    document.body.classList.toggle("dark-theme", isDark); 
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  toggleTheme = () => {
    this.setTheme(!this.state.isDark);
  };

  render() {
    const { isDark } = this.state;

    return (
      <header>
        <div className="site-navigation" id="mainmenu-area">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* LOGO */}
              <HashLink
                to="#home"
                className="navbar-brand d-flex align-items-center"
              >
                <img
                  src="assets/images/logo-icon.png"
                  alt="Designated AI logo"
                  style={{ height: 40, width: 40, marginRight: 10 }}
                />
                <span className="brand-text">designated.ai</span>
              </HashLink>

              {/* MOBILE TOGGLE */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarMenu"
                aria-controls="navbarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="fa fa-bars"></span>
              </button>

              {/* MENU */}
              <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav ms-auto">
                  {menus.map((menu) => (
                    <li className="nav-item" key={menu.id}>
                      <HashLink
                        to={menu.tomenu}
                        className="nav-link js-scroll-trigger"
                      >
                        {menu.namemenu}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SOCIALS + THEME TOGGLE */}
              <div className="header-right-info d-none d-lg-flex align-items-center">
                <ul className="header-socials mb-0">
                  <li>
                    <Link to="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-pinterest" />
                    </Link>
                  </li>
                </ul>

                <button
                  type="button"
                  className="theme-toggle"
                  onClick={this.toggleTheme}
                  aria-label="Toggle theme"
                  title={isDark ? "Switch to light" : "Switch to dark"}
                >
                  <i className={isDark ? "fa fa-sun" : "fa fa-moon"} />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;