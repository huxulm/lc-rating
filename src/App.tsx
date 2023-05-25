import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
// import ContestList from "./ContestList";
import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import GithubProfile from "./components/gh";
import Zen from"./Zen";

const ContestList = React.lazy(() => import("./ContestList"));

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ContestList />} />
          <Route path="zen" index element={<Zen />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Navbar expand="lg" className="p-0 text-bg-light">
        <Container className="navbar fw-bold">
          <Navbar.Brand className="navbar-brand nav-link">
            力扣竞赛题目
          </Navbar.Brand>
          <Link className="nav-link px-lg-3" to="/">
            <button className="btn btn-secondary fw-bold fs-6 p-1">竞赛列表</button>
          </Link>
          <Link className="nav-link px-lg-3" to="/zen">
            <button className="btn btn-secondary fw-bold fs-6 p-1">
              难度练习
            </button>
          </Link>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link
              href="https://github.com/huxulm/lc-rating"
              className="btn btn-outline-secondary p-1"
            >
              <span className="me-1">Github</span>
              <GithubProfile classname="" />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* render child */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
