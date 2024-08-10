import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';

const EmailTemplateCreation = () => {
  return (
    <Container>
      <h1>Create Email Template</h1>
      <Form>
        <Form.Group controlId="formTemplateName">
          <Form.Label>Template Name</Form.Label>
          <Form.Control type="text" placeholder="Enter template name" />
        </Form.Group>
        <Form.Group controlId="formTemplateContent">
          <Form.Label>Template Content</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Enter template content" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Template
        </Button>
      </Form>
    </Container>
  );
};

export default EmailTemplateCreation;
