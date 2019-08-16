import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;

  & > div {
    margin: 50px;
  }
`;

const Layout = ({ children }) => (
  <Container>
    <div>
      { children }
    </div>
  </Container>
);

export default Layout;
