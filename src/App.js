import Home from "./App/Pages/ScreenOne/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./App/Components/Layout";
import "./assets/scss/style.css";
import ScreenTwo from "./App/Pages/ScreenTwo/ScreenTwo";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/wallet" element={<ScreenTwo />} />
        <Route
          path="*"
          element={
            <Layout title="Page Not Found">
              <h3>
                Page Not Found <Link to={-1}>Go Home.</Link>
              </h3>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
