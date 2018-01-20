import React, { Component } from 'react';
import './styles.css';

// Bootstrap components
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

class InfoPanel extends Component {

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardSubtitle>{this.props.subtitle}</CardSubtitle>
            <CardText>{this.props.description}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default InfoPanel;
