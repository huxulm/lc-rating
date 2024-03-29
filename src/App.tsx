import { Routes, Route, Outlet, Link } from "react-router-dom";
// import ContestList from "./ContestList";
import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import GithubProfile from "./components/gh";

import Zen from "./Zen";
import Search from "./Search";

import ContestList from "./ContestList";
import List from "./List";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<ContestList />} />
          <Route path="/" index element={<ContestList />} />
          <Route path="zen" index element={<Zen />} />
          <Route path="search" index element={<Search />} />
          <Route path="list" index element={<List />} />
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
          <Nav.Link
            href="/lc-rating"
            className="navbar-brand nav-link"
          >
            力扣竞赛题目
          </Nav.Link>
          <Link className="nav-link px-lg-3" to="/">
            <button className="btn btn-secondary fw-bold fs-6 p-1">竞赛列表</button>
          </Link>
          <Link className="nav-link px-lg-3" to="/zen">
            <button className="btn btn-secondary fw-bold fs-6 p-1">
              难度练习
            </button>
          </Link>
          <Link className="nav-link px-lg-3" to="/search">
            <button className="btn btn-secondary fw-bold fs-6 p-1">
              0x3F 题解
            </button>
          </Link>
          {/* <Link className="nav-link px-lg-3" to="/list">
            <button className="btn btn-secondary fw-bold fs-6 p-1">
              0x3F 题单
            </button>
          </Link> */}
          <span className="navbar-brand fs-6 fw-semibold">本页面所有题解来自 <a href="https://space.bilibili.com/206214/" className="link fw-bold text-danger">bilibili@灵茶山艾府</a> 感谢！</span>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link
              href="https://github.com/huxulm/lc-rating"
              className="btn btn-outline-secondary p-1"
            >
              <span className="me-1">&nbsp;源码&nbsp;</span>
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
