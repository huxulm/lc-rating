"use client";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/esm/Container";
import Link from "next/dist/client/link";
import Button from "react-bootstrap/esm/Button";
import ThemeSwitchButton from "../../ThemeSwitchButton";
import { useTheme } from "../../../hooks/useTheme";
import GithubProfile from "../../gh";
import { useEffect } from "react";

export default function () {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    toggleTheme(theme);
  }, []);
  return (
    <Navbar expand="lg" className="position-sticky top-0 p-0">
      <Container className="navbar fw-bold ps-2 pe-2">
        <Navbar.Brand href="/lc-rating" className="navbar-brand nav-link">
          力扣竞赛题目
        </Navbar.Brand>
        <div className="d-flex flex-fill d-md-none d-lg-none justify-content-end pe-2">
          <span
            className="btn d-flex rounded-circle p-1"
            onClick={() => {
              toggleTheme(theme == "dark" ? "light" : "dark");
            }}
          >
            <ThemeSwitchButton height={24} width={24} theme={theme} />
          </span>
          <Link
            href="https://github.com/huxulm/lc-rating"
            className="btn d-flex p-1 ms-2 rounded-circle"
          >
            <GithubProfile width={24} height={24} classname="p-1" />
          </Link>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="me-auto">
            <Link className="nav-link px-lg-3" href="/">
              <Button className="fw-bold fs-6 p-1">竞赛列表</Button>
            </Link>
            <Link className="nav-link px-lg-3" href="/zen">
              <Button className="fw-bold fs-6 p-1">难度练习</Button>
            </Link>
            <Link className="nav-link px-lg-3" href="/search">
              <Button className="fw-bold fs-6 p-1">0x3F 题解</Button>
            </Link>
            <Link className="nav-link px-lg-3" href="/list/dp">
              <Button className="fw-bold fs-6 p-1">动态规划</Button>
            </Link>
            <Link className="nav-link px-lg-3" href="/list/ds">
              <Button className="fw-bold fs-6 p-1">数据结构</Button>
            </Link>
          </Nav>
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
          <span
            className="btn d-flex rounded-circle p-1 d-none d-lg-block d-xl-block d-sm-none"
            onClick={() => {
              toggleTheme(theme == "dark" ? "light" : "dark");
            }}
          >
            <ThemeSwitchButton height={24} width={24} theme={theme} />
          </span>
          <Link
            href="https://github.com/huxulm/lc-rating"
            className="btn d-flex p-1 ms-2 rounded-circle d-none d-lg-block d-xl-block d-sm-none"
          >
            <GithubProfile width={24} height={24} classname="p-1" />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
