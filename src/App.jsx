import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPages from './Pages/LoginPages';
import RegistrationPage from './pages/RegistrationPage';
import DashboardPage from './Pages/DashboardPage';
import EmailTemplatePage from './Pages/EmailTemplatePage';
import EmailSendingPage from './Pages/EmailSendingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-template" element={<EmailTemplatePage />} />
        <Route path="/send-email" element={<EmailSendingPage />} />
        <Route path="/" element={<LoginPages />} />
      </Routes>
    </Router>
  );
}

export default App;
