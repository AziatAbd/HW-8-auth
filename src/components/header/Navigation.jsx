import React from "react";
import styled from "styled-components";

const Navigation = (props) => {
  return (
    <>
      <Navigator>
        <Link onClick={() => props.onClick("users")}>Users</Link>
        <Link onClick={() => props.onClick("timer")}>Timer</Link>
        <Link onClick={props.onLogout}>Logout</Link>
      </Navigator>
    </>
  );
};

export default Navigation;

const Navigator = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 25px;
`;

const Link = styled.li`
  background: #dd0db0;
  padding: 5px 20px;
  border-radius: 25px;
  cursor: pointer;
`;
