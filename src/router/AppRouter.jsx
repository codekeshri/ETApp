import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Auth from "../pages/Auth.jsx";
import NotFound from "../pages/NotFound";
import Layout from "../shared/Layout/Layout";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/Home" element={<Home />} />
              </Routes>
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
