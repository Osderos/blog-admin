import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

import styled from "styled-components";

function Navbar() {
  return (
    <NavbarContainer>
      <h1>OsDeRos Blog Admin</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/newpost"}>New Post</Link>
      <Link to={"/allposts"}>All Posts</Link>
      <div>
        <LoginForm />
      </div>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap:15px;
  div {
    display: flex;
    margin-left: auto;
  }
`;

export default Navbar;
