import styled from "styled-components";
import Timer from "./Timer";
import Users from "./Users";

const MainContent = (props) => {
  return (
    <Container>
      {props.currentPage === "users" && <Users />}
      {props.currentPage === "timer" && <Timer />}
    </Container>
  );
};

export default MainContent;

const Container = styled.div`
  text-align: center;
  box-shadow: 0px 0px 17px 9px rgb(34 60 80 / 20%);
  width: 500px;
  margin: 0 auto;
  border-radius: 15px;
  padding: 1rem;
`;
