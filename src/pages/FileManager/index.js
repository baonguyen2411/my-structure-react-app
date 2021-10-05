import React, { memo } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './styles.scss';

const FileManager = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>FileManager Page</h3>
        </Col>
      </Row>
    </Container>
  );
};

FileManager.propTypes = {};

export default memo(FileManager);
