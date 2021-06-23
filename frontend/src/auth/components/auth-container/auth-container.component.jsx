import React from 'react';
import {Container} from "./auth-container.styles";

const AuthContainer = ({ title = '', children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};

export default AuthContainer;
