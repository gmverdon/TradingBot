import React, {PureComponent} from 'react';
import './styles.css';
import { Card, CardBody, CardTitle, CardText, Button, ButtonGroup } from 'reactstrap';

export default class OptionPanel extends PureComponent {
  getButtons = () =>
    this.props.options.map((option, i) => this.generateButton(option.label, option.value, option.color, i));

  generateButton = (label, value, color, counter) => (
    <Button
      key={counter}
      color={value === this.props.value ? color : 'secondary'}
      onClick={() => this.handleClick(value)}>
      {label}
    </Button>
  );

  handleClick = value => this.props.onChange(value);

  render = () => (
    <Card>
      <CardBody>
        <CardTitle>{this.props.title}</CardTitle>
        <CardText>{this.props.description}</CardText>
        <ButtonGroup>{this.getButtons()}</ButtonGroup>
      </CardBody>
    </Card>
  );
};
