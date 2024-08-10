import React from 'react';
import { Container } from 'react-bootstrap';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage = () => {
  return (
    <Container>
      <h1>Register</h1>
      <RegistrationForm />
    </Container>
  );
};

export default RegistrationPage;
