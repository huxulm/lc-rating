import React, { lazy, Suspense, useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from "react-bootstrap/esm/Navbar";
import Spinner from "react-bootstrap/Spinner";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/esm/Nav";
import GithubProfile from "./components/gh";

const ContestList = lazy(() => import("./ContestList"));
const Zen = lazy(() => import("./Zen"));
const Search = lazy(() => import("./Search"));
const List = lazy(() => import("./List"));

import { useTheme } from "./hooks/useTheme";
import ThemeSwitchButton from "./components/ThemeSwitchButton";

// styles
import "./scss/styles.scss";

function WithLoading({ children }: React.PropsWithChildren<{}>) {
  return (
    <Suspense fallback={<Spinner size="sm" className="loader" />}>
      {children}
    </Suspense>
  );
}

export default function App() {
  const { theme } = useTheme();
  return (
    <div data-bs-theme={theme}>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route
            index
            element={
              <WithLoading>
                <ContestList />
              </WithLoading>
            }
          />
          <Route
            path="/"
            index
            element={
              <WithLoading>
                <ContestList />
              </WithLoading>
            }
          />
          <Route
            path="zen"
            index
            element={
              <WithLoading>
                <Zen />
              </WithLoading>
            }
          />
          <Route
            path="search"
            index
            element={
              <WithLoading>
                <Search />
              </WithLoading>
            }
          />
          <Route
            path="list"
            index
            element={
              <WithLoading>
                <List />
              </WithLoading>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="app">
      <Navbar expand="lg" className="p-0 text-bg">
        <Container className="navbar fw-bold">
          <Nav.Link href="/lc-rating" className="navbar-brand nav-link">
            力扣竞赛题目
          </Nav.Link>
          <Link className="nav-link px-lg-3" to="/">
            <Button className="fw-bold fs-6 p-1">竞赛列表</Button>
          </Link>
          <Link className="nav-link px-lg-3" to="/zen">
            <Button className="fw-bold fs-6 p-1">难度练习</Button>
          </Link>
          <Link className="nav-link px-lg-3" to="/search">
            <Button className="fw-bold fs-6 p-1">0x3F 题解</Button>
          </Link>
          {/* <Link className="nav-link px-lg-3" to="/list"> */}
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              0x3F 题单
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link className="nav-link px-lg-3" to="/list?p=dp">
                  动态规划
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* </Link>           */}
          {/* <Link className="nav-link px-lg-3" to="/list">
            <Button className="fw-bold fs-6 p-1">
              0x3F 题单
            </Button>
          </Link> */}
          <span className="navbar-brand fs-6 fw-semibold">
            本页面所有题解来自{" "}
            <a
              href="https://space.bilibili.com/206214/"
              className="link fw-bold text-danger"
            >
              bilibili@灵茶山艾府
            </a>{" "}
            感谢！
          </span>
          <Navbar.Collapse className="justify-content-end">
            <span
              className="btn d-flex rounded-circle shadow p-1"
              onClick={() => {
                toggleTheme(theme == "dark" ? "light" : "dark");
              }}
            >
              <ThemeSwitchButton height={24} width={24} theme={theme} />
            </span>
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
