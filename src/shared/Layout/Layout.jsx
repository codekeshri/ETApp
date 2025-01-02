import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <header>
        <Header />
      </header>

      <div className="container-fluid flex-grow-1 d-flex">
        <aside className="col-md-3 col-lg-2 p-3 bg-light">
          <Sidebar />
        </aside>

        <main className="col-md-9 col-lg-10 p-3">{children}</main>
      </div>

      <footer className="bg-light p-3 mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
