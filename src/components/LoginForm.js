import React, { useState } from "react";

import styled from "styled-components";

function LoginForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
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
      </FormContainer>
    </div>
  );
}

const FormContainer = styled.form`
  display: flex;
  gap: 15px;
`;

export default LoginForm;
