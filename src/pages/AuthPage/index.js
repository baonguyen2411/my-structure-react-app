import React, { memo } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AuthPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Auth Page</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(AuthPage);
