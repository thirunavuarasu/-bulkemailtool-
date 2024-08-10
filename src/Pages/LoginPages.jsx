import React from 'react';
import { Container } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <Container>
      <h1>Login</h1>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
