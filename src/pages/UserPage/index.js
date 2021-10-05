import React, { memo } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './styles.scss';

const UserPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>UserPage Page</h3>
        </Col>
      </Row>
    </Container>
  );
};

UserPage.propTypes = {};

export default memo(UserPage);
