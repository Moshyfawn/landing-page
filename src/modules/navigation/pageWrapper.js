import React from "react";
import styled from "styled-components";

import Header from "./header";
import Footer from "./footer";

function PageWrapper({ children }) {
  return (
    <Container className="page-wrapper">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  min-width: calc(100vw - (100vw - 100%));
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  flex: 1 0 auto;
`;

export default PageWrapper;
