import React, { useState } from "react";

import styled from "styled-components";
import SignupForm from "./SignupForm";

function LoginForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [isHidden, setHidden] = useState(true);
  const [loggedUser, setLoggedUser] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setUser({
      username: "",
      password: "",
    });
  };

  const handleModal = () => {
    setHidden(!isHidden);
  };

  const notLoggedTemplate = (
    <div>
      <FormContainer onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={handleModal}>
          Signup
        </button>
      </FormContainer>
      <SignupForm
        isHidden={isHidden}
        handleModal={handleModal}
        setLoggedUser={setLoggedUser}
      />
    </div>
  );

  const loggedTemplate = (
    <div>
      <div>Logged as : {loggedUser}</div>
      <button>Logout</button>
    </div>
  );

  return (
    <div>{loggedUser.length > 0 ? loggedTemplate : notLoggedTemplate}</div>
  );
}

const FormContainer = styled.form`
  display: block;
`;

export default LoginForm;
