import React from 'react';
import './styles.css';

// Libraries
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const InfoPanel = ({ title, subtitle, description }) => (
  <Card>
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
      <CardText>{description}</CardText>
    </CardBody>
  </Card>
);

export default InfoPanel;
