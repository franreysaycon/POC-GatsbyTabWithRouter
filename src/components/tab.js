import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 200px;
  border: 1px solid;
  border-color: #E0E0E0;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  & > div {
    margin: 20px;
  }

  & :hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  ${props => props.active &&
    `
      color: white;
      background-color: #4169E1;
    ` 
  }

`;

const Tab = ({ id, active, children, onClick }) => (
  <Container id={id} active={active} onClick={onClick}>
      <div id={id}>
          { children }
      </div>
  </Container>
);

export default Tab;
