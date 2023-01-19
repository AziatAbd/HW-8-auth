import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Header = (props) => {
  return (
    <Container>
      <h1>A Typical Page</h1>
      {props.isAuthenticated && (
        <Navigation
          onClick={props.onChangePage}
          onLogout={props.onLogout}
        />
      )}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #741188;
  color: #fff;
  padding: 0 30px;
  margin: 0 0 50px 0;
`;
