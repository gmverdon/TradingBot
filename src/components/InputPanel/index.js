import React from 'react';
import './styles.css';

// Libraries
import { Card, CardBody, CardTitle, CardText,
  Button, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';


const InputPanel = ({onChange, value, name, step, title, description, placeholder}) => (
  <Card>
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardText>{description}</CardText>
      <div className="horizontalGroup">
        <Input step={step} onChange={onChange} value={value} type="number" name={name} placeholder={placeholder} />
        <Button className="ml-3" color="primary">Submit</Button>
      </div>
    </CardBody>
  </Card>
);

export default InputPanel;
