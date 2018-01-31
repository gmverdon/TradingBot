import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardText, CardBody, CardTitle } from 'reactstrap';
import './styles.css';

const InfoPanel = ({ title, subtitle, subtitleClass, description }) => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          <CardTitle>{title}</CardTitle>
        </Col>
        <Col xs="3">
          <CardText className={`${subtitleClass} subtitle`}>{subtitle}</CardText>
        </Col>
      </Row>
      <CardText>{description}</CardText>
    </CardBody>
  </Card>
);

InfoPanel.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  subtitleClass: PropTypes.string,
  description: PropTypes.string.isRequired,
};

InfoPanel.defaultProps = {
  subtitle: '',
  subtitleClass: '',
};


export default InfoPanel;
