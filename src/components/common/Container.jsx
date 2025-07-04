import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 20px 40px;
`;
const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
