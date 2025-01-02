import React from "react";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand"
          href="#"
          style={{ marginLeft: "20px", fontWeight: "bold" }}
        >
          Expense Tracker
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                complete profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                verify email
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                edit details
              </a>
            </li>
            <div style={{ marginLeft: "600px", display: "flex" }}>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                style={{
                  marginLeft: "5px",
                  float: "right",
                  height: "34px",
                  textAlign: "center",
                }}
              >
                Search
              </button>

              <li className="nav-item active">
                <a className="nav-link" href="#" style={{ marginLeft: "50px" }}>
                  Logout
                </a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
