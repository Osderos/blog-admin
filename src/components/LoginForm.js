import React, { useState } from "react";

import styled from "styled-components";

function LoginForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [isHidden, setHidden] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setUser({
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    setUser({
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleModal = () => {
    setHidden(!isHidden);
  };

  return (
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
      <SignupFormContainer isHidden={isHidden} onSubmit={handleSignup}>
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
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleModal}>
          Cancel
        </button>
      </SignupFormContainer>
    </div>
  );
}

const FormContainer = styled.form`
  display: block;
`;

const SignupFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  visibility: ${(props) => (props.isHidden ? "hidden" : "visible")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

export default LoginForm;
