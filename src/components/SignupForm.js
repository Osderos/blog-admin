import React, { useState } from "react";
import { postSignup } from "../utils/api_requests";
import uniqid from "uniqid";
import styled from "styled-components";

function SignupForm(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const [signupErrors, setSignupErrors] = useState([]);
  const [usernameError, setUsernameError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const data = await postSignup(user);
    data.errors ? setSignupErrors(data.errors) : setUsernameError(data.error);

    if (data.author) {
      props.handleModal();
      props.setLoggedUser(data.author.username);
    } else {
      return null;
    }

    setUser({
      username: user.username,
      password: "",
      passwordConfirm: "",
    });
  };

  const errorMessages =
    signupErrors.length > 0
      ? signupErrors.map((err) => <span key={uniqid()}>{err.msg}</span>)
      : null;

  const errorUsername =
    usernameError !== "undefined" ? <span>{usernameError}</span> : null;

  return (
    <SignupFormContainer isHidden={props.isHidden} onSubmit={handleSignup}>
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
        <label htmlFor="passwordConfirm">Confirm Password:</label>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          value={user.passwordConfirm}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={props.handleModal}>
        Cancel
      </button>
      {errorMessages}
      {errorUsername}
    </SignupFormContainer>
  );
}

const SignupFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  visibility: ${(props) => (props.isHidden ? "hidden" : "visible")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

export default SignupForm;
