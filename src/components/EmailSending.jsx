import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';

const EmailSending = () => {
  return (
    <Container>
      <h1>Send Bulk Emails</h1>
      <Form>
        <Form.Group controlId="formRecipientList">
          <Form.Label>Recipient List</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group controlId="formTemplateSelect">
          <Form.Label>Select Template</Form.Label>
          <Form.Control as="select">
            <option>Template 1</option>
            <option>Template 2</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Send Emails
        </Button>
      </Form>
    </Container>
  );
};

export default EmailSending;
