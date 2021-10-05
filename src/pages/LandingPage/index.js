import React, { memo } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './styles.scss';

const LandingPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Landing Page</h3>
        </Col>
      </Row>
    </Container>
  );
};

LandingPage.propTypes = {};

export default memo(LandingPage);
