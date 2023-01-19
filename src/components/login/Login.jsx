import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes("@") && enteredPassword.trim().length > 6
    );
  }, [enteredEmail, enteredPassword]);
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <LoginForm onSubmit={submitHandler}>
      <LoginCont>
        <LoginLabel htmlFor="email">E-Mail</LoginLabel>
        <LoginInput
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          bg={emailIsValid === false ? "#fbdada" : ""}
        />
      </LoginCont>
      <LoginCont>
        <LoginLabel htmlFor="password">Password</LoginLabel>
        <LoginInput
          bg={passwordIsValid === false ? "#fbdada" : ""}
          type="password"
          id="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
      </LoginCont>
      <div>
        <LoginButton
          variant="contained"
          color="secondary"
          type="submit"
          disabled={!formIsValid}
          bg={!formIsValid ? "#b9b9c2" : ""}
        >
          Login
        </LoginButton>
      </div>
    </LoginForm>
  );
};

export default Login;

const LoginForm = styled.form`
  text-align: center;
  box-shadow: 0px 0px 17px 9px rgb(34 60 80 / 20%);
  width: 500px;
  height: 150px;
  margin: 0 auto;
  border-radius: 15px;
  padding: 1rem;
`;

const LoginInput = styled.input`
  height: 25px;
  width: 270px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: ${(props) => props.bg};
`;

const LoginLabel = styled.label`
  font-weight: 700;
`;

const LoginCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px 0;
`;

const LoginButton = styled.button`
  padding: 5px 35px;
  background-color: #50005f;
  color: #fff;
  font-weight: 700;
  border-radius: 15px;
  border: 1px;
  cursor: pointer;
  background-color: ${(props) => props.bg};
`;
