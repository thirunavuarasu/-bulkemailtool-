import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <h1>Dashboard</h1>
      {/* Dashboard content goes here */}
    </Container>
  );
};

export default Dashboard;
