import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
// import ContestList from "./ContestList";
import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";

const ContestList = React.lazy(() => import("./ContestList"));

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ContestList />} />
          <Route path="zen" element={<Zen />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Zen() {
  return <Container>Zen mode</Container>
}

function Layout() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="p-0">
        <Container>
          <Navbar.Collapse className="justify-content-center">
            <Nav>
              <Link className="nav-link" to="/"><span className="btn btn-info nav-link fs-6">Contest List</span></Link>
              
              <Link className="nav-link" to="/zen"><span className="btn btn-secondary nav-link fs-6">Zen Mode Traning</span></Link>
            </Nav>
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