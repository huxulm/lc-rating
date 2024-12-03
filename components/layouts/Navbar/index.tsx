"use client";
import Link from "next/dist/client/link";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTheme } from "../../../hooks/useTheme";
import { GithubBasicBadge as GithubBadge } from "../../gh";
import ThemeSwitchButton from "../../ThemeSwitchButton";
// import GithubProfile from "../../gh";
import SyncProgressModal from "@components/SyncProgressModal";
import { useCallback, useEffect, useState } from "react";

export default function () {
  const { theme, toggleTheme } = useTheme();
  const [showModal, setShowModal] = useState(false);

  const handleModalState = useCallback((state: boolean) => {
    setShowModal(state);
    if (!state) {
      // When closing the modal
      // Perform side effects here
      window.location.reload();
    }
  }, []);

  const handleOpenModal = () => handleModalState(true);
  const handleCloseModal = () => handleModalState(false);

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
            {/* <GithubProfile width={24} height={24} classname="p-1" /> */}
          </Link>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="me-auto">
            <Link className="nav-link d-flex" href="/">
              <Button id="nav-cl" className="fw-bold fs-6 p-1">
                竞赛列表
              </Button>
            </Link>
            <Link className="nav-link d-flex" href="/zen">
              <Button id="nav-tr" className="fw-bold fs-6 p-1">
                难度练习
              </Button>
            </Link>
            <Link className="nav-link d-flex" href="/search">
              <Button id="nav-0x3f" className="fw-bold fs-6 p-1">
                💡0x3F
              </Button>
            </Link>

            <div className="nav-link d-flex">
              <Button
                id="nav-pg"
                className="fw-bold fs-6 p-1"
                onClick={handleOpenModal}
              >
                同步进度
              </Button>
            </div>
            <SyncProgressModal show={showModal} onHide={handleCloseModal} />

            <DropdownButton
              id="nav-pl"
              color="primary"
              title="📑题单"
              className="nav-link d-flex fw-bold"
            >
              <Link className="nav-link px-lg-3" href="/list/slide_window">
                <Button className="fw-bold fs-6 p-1">📑滑动窗口</Button>
              </Link>
              <Link className="nav-link px-lg-3" href="/list/binary_search">
                <Button className="fw-bold fs-6 p-1">📑二分查找</Button>
              </Link>
              <Link className="nav-link px-lg-3" href="/list/monotonic_stack">
                <Button className="fw-bold fs-6 p-1">📑单调栈</Button>
              </Link>
              <Link className="nav-link px-lg-3" href="/list/grid">
                <Button className="fw-bold fs-6 p-1">📑网格图</Button>
              </Link>
              <Link
                className="nav-link px-lg-3"
                href="/list/bitwise_operations"
              >
                <Button className="fw-bold fs-6 p-1">📑位运算</Button>
              </Link>
              <Link className="nav-link px-lg-3" href="/list/graph">
                <Button className="fw-bold fs-6 p-1">📑图论算法</Button>
              </Link>
              <Link
                className="nav-link px-lg-3"
                href="/list/dynamic_programming"
              >
                <Button className="fw-bold fs-6 p-1">📑动态规划</Button>
              </Link>
              <Link className="nav-link px-lg-3" href="/list/data_structure">
                <Button className="fw-bold fs-6 p-1">📑数据结构</Button>
              </Link>
              <Link className="nav-link px-lg-3" href="/list/math">
                <Button className="fw-bold fs-6 p-1">📑数学</Button>
              </Link>
              <Link className="nav-link px-lg-3" href="/list/greedy">
                <Button className="fw-bold fs-6 p-1">📑贪心</Button>
              </Link>
              <Link className="nav-link px-lg-3" href="/list/trees">
                <Button className="fw-bold fs-6 p-1">📑树和二叉树</Button>
              </Link>
              <Link className="nav-link px-lg-3" href="/list/string">
                <Button className="fw-bold fs-6 p-1">📑字符串</Button>
              </Link>
            </DropdownButton>
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
            target="_blank"
            className="d-flex p-1 ms-2 d-none d-lg-block d-xl-block d-sm-none"
          >
            {/* @ts-ignore */}
            <GithubBadge
              url="https://github.com/huxulm/lc-rating"
              theme="system"
              text=""
              icon="octocat"
            />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
