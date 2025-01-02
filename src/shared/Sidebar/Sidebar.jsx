function Sidebar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-grey">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-black min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none"
              ></a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-speedometer2"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Board</span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Login</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu2"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle "
                  >
                    <i className="fs-4 bi-bootstrap"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Signup</span>
                  </a>
                  <ul
                    className="collapse nav flex-column ms-1"
                    id="submenu2"
                    data-bs-parent="#menu"
                  >
                    <li>
                      <a href="#" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Premium</span> 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#submenu3"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-grid"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Users</span>{" "}
                  </a>
                  <ul
                    className="collapse nav flex-column ms-1"
                    id="submenu3"
                    data-bs-parent="#menu"
                  >
                    <li>
                      <a href="#" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Product</span> 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Product</span> 3
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Product</span> 4
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">About</span>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
