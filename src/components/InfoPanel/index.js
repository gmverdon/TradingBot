import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './styles.css';

const InfoPanel = ({ title, subtitle, description }) => (
  <Card>
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
      <CardText>{description}</CardText>
    </CardBody>
  </Card>
);

InfoPanel.defaultProps = {
  subtitle: '',
};

InfoPanel.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
};

export default InfoPanel;
