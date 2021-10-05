import React, { memo } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './styles.scss';

const Setting = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Setting Page</h3>
        </Col>
      </Row>
    </Container>
  );
};

Setting.propTypes = {};

export default memo(Setting);
